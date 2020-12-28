/* eslint-disable no-console */

// !!! if you're changing the auth algorithm please update the comment

/*
here we initiate an auth request to social provider (ex Facebook);
the social log in form gets open in a new window (tab);
upon succefful login, the client (in that second window) is redirected back to our app,
there we should check the url params (see callback.js, which is another WP entry point btw);
if we find certain auth params (state and code),
we postMessage to the opener window (the 1st one, where user clicked Sign In)
and close the current window (all this in callback.js) here;
we then should handle the posted message and if everything is fine, return auth data (code);
*/
import { TFunction1 } from 'src/common/lib/functionTypes';
import { v4 as uuid } from 'uuid';

declare let window: any;

export type SocialProvider = 'yandex' | 'facebook';
export interface OAuthResponse {
  code: string;
  accessToken: string;
  redirectUri: string;
}

interface Config {
  provider: SocialProvider;
  clientId: string;
  authorization: string;
  responseType: string;
  scopes: string;
}

const debug = false;

function buildRedirectUri() {
  return window.location.origin + '/auth-callback.html';
}

const yandexConfig: Config = {
  provider: 'yandex',
  clientId: process.env.REACT_APP_YANDEX_APP_ID,
  authorization: 'https://oauth.yandex.ru/authorize',
  responseType: 'token',
  scopes: 'login:email',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fbConfig: Config = {
  provider: 'facebook',
  clientId: process.env.REACT_APP_FB_APP_ID as any,
  authorization: 'https://www.facebook.com/v8.0/dialog/oauth',
  responseType: 'code',
  scopes: 'email',
};

const configs = {
  yandex: yandexConfig,
};

let authPromise: Promise<OAuthResponse>;
let resolveAuthPromise: TFunction1<OAuthResponse>;
let rejectAuthPromise: TFunction1<string>;
let state: string;

export function getAuthCode(provider: SocialProvider): Promise<OAuthResponse> {
  const config = configs[provider];
  if (!config) {
    return Promise.reject(null);
  }

  // got new auth request, close previous one (if any)
  if (authPromise && rejectAuthPromise) {
    rejectAuthPromise('New auth request issued');
  }
  authPromise = new Promise((res, rej) => {
    resolveAuthPromise = res;
    rejectAuthPromise = rej;
  });

  // apart from standard oauth2 security precaution
  // state needed to match the request-callback pair
  state = uuid();
  const redirectUri = buildRedirectUri();

  // this is the copmlete authorizarion code link
  const authLink = `${config.authorization}?response_type=${
    config.responseType
  }&state=${state}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${
    config.scopes
  }&client_id=${config.clientId}`;

  // eslint-disable-next-line no-console
  debug && console.log('opening auth window', authLink);

  const authWindow = window.open(authLink, '_lz_auth');
  authWindow.focus();

  return authPromise;
}

function onMessage({ data, origin }) {
  // disregard all messages but our auth
  if (!data.authMessage) {
    return;
  }

  const redirectUri = buildRedirectUri();
  // eslint-disable-next-line no-console
  debug && console.log('got auth message');

  if (
    redirectUri.indexOf(origin) !== 0 || // same origin only
    !(authPromise && resolveAuthPromise) || // nothing has interrupted the auth request and the subject is ready
    data.state !== state ||
    !(data.code || data.access_token)
  ) {
    rejectAuthPromise && rejectAuthPromise('auth was interrupted');
    authPromise = null;
    resolveAuthPromise = null;
    rejectAuthPromise = null;
    state = null;
    return;
  }

  // eslint-disable-next-line no-console
  debug && console.log('got the access', data.code, data.access_token);

  resolveAuthPromise({
    code: data.code,
    accessToken: data.access_token,
    redirectUri,
  });
  authPromise = null;
  resolveAuthPromise = null;
  rejectAuthPromise = null;
}

(function init() {
  // communicate between windows (tabs) by means of post messaging
  window.addEventListener('message', onMessage, false);
})();
