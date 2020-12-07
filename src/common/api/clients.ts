import axios from 'axios';
import { routes } from 'src/app/routes';
import { authService } from 'src/auth/authService';
import { Chain } from './graphql-zeus';

export const apiUrl = `${process.env.REACT_APP_API_URL}/graphql`;

export const restApi = axios.create({
  baseURL: apiUrl,
});

const initChain = () =>
  Chain(apiUrl, {
    headers: {
      Authorization: `Bearer ${authService.getToken()}`,
      'Content-Type': 'application/json',
    },
  });

let gqlChain = initChain();

const redirectToLoginPage = () => {
  authService.setToken(null, null);
  // @ts-ignore
  document.location = routes.login;
};

export const gqlApi = {
  query: (o: any, variables?) =>
    // eslint-disable-next-line no-console
    gqlChain.query(o, variables).catch(async (e) => {
      if (e !== 'Unauthorized') {
        throw e;
      }

      const provider = authService.getProvider();
      if (!provider) {
        redirectToLoginPage();
        return;
      }

      await authService.login(provider);

      const newChain = initChain();
      const queryPromise = newChain.query(o, variables);
      queryPromise.then(() => (gqlChain = newChain), redirectToLoginPage);

      return queryPromise;
    }),
  mutation: (o: any, variables?) =>
    gqlChain.mutation(o, variables).catch(async (e) => {
      if (e !== 'Unauthorized') {
        throw e;
      }

      const provider = authService.getProvider();
      if (!provider) {
        redirectToLoginPage();
        return;
      }

      await authService.login(provider);

      const newChain = initChain();
      const mutationPromise = newChain.mutation(o, variables);
      mutationPromise.then(() => (gqlChain = newChain), redirectToLoginPage);

      return mutationPromise;
    }),
} as ReturnType<typeof Chain>;

// export const gqlApi = initChain();
