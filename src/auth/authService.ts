import { IStorage, storage } from 'src/common/lib/storage';
import { getAuthCode, SocialProvider } from './oAuth';

export class AuthService {
  storage: IStorage;
  token: string;
  provider: SocialProvider;

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const token = this.storage.get('lz_token');
    if (token) {
      this.token = token;
    }

    return this.token;
  }

  getProvider() {
    if (this.provider) {
      return this.provider;
    }

    const provider = this.storage.get('lz_provider');
    if (provider) {
      this.provider = provider;
    }

    return this.provider;
  }

  setToken(token: string, provider: SocialProvider) {
    this.storage.set('lz_token', token);
    this.storage.set('lz_provider', provider);
    this.token = token;
    this.provider = provider;
  }

  async login(provider: SocialProvider) {
    const auth = await getAuthCode(provider);
    if (auth.accessToken) {
      this.setToken(auth.accessToken, provider);
    }
  }
}

export const authService = new AuthService(storage);
