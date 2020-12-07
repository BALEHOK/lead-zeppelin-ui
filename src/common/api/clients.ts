import axios from 'axios';
import { routes } from 'src/app/routes';
import { authService } from 'src/auth/authService';
import { GraphQLError, Thunder } from './graphql-zeus';

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export const apiUrl = `${process.env.REACT_APP_API_URL}/graphql`;

export const restApi = axios.create({
  baseURL: apiUrl,
});

const redirectToLoginPage = () => {
  authService.setToken(null, null);
  // @ts-ignore
  document.location = routes.login;
};

/** Handle error. In case of 401 redirect to login page */
const handleFetchResponse = (
  response: Parameters<
    Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>
  >[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    if (response.status === 401) {
      redirectToLoginPage();
    }

    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

/** Call API. In case of 401 try to refresh the token once. */
const thunderFetch = (query: string, variables: Record<string, any> = {}) => {
  const doFetch = () =>
    fetch(apiUrl, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authService.getToken()}`,
        'Content-Type': 'application/json',
      },
    });

  return doFetch()
    .then((response) => {
      if (response.status !== 401) {
        return response;
      }

      const provider = authService.getProvider();
      if (!provider) {
        redirectToLoginPage();
        return response;
      }

      return authService.login(provider).then(doFetch);
    })
    .then(handleFetchResponse)
    .then((response: GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      return response.data;
    });
};

export const gqlApi = Thunder(thunderFetch);
