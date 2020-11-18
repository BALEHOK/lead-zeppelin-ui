import axios from 'axios';
import { Chain } from './graphql-zeus';

export const apiUrl = `${process.env.REACT_APP_API_URL}/graphql`;

export const restApi = axios.create({
  baseURL: apiUrl,
});

export const gqlApi = Chain(apiUrl);
