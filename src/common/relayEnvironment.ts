import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const apiUrl = `${process.env.REACT_APP_API_URL}/graphql`;

function fetchQuery(operation, variables) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});