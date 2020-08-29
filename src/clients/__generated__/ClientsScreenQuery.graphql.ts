/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsScreenQueryVariables = {
    code: string;
};
export type ClientsScreenQueryResponse = {
    readonly account: {
        readonly clients: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"ClientsTable_clients">;
        } | null> | null;
    } | null;
};
export type ClientsScreenQuery = {
    readonly response: ClientsScreenQueryResponse;
    readonly variables: ClientsScreenQueryVariables;
};



/*
query ClientsScreenQuery(
  $code: String!
) {
  account(code: $code) {
    clients {
      ...ClientsTable_clients
    }
  }
}

fragment ClientsTable_clients on ClientType {
  id
  name
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "code",
    "type": "String!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "code"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientType",
            "kind": "LinkedField",
            "name": "clients",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientsTable_clients"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AccountType",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientType",
            "kind": "LinkedField",
            "name": "clients",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ClientsScreenQuery",
    "operationKind": "query",
    "text": "query ClientsScreenQuery(\n  $code: String!\n) {\n  account(code: $code) {\n    clients {\n      ...ClientsTable_clients\n    }\n  }\n}\n\nfragment ClientsTable_clients on ClientType {\n  id\n  name\n  email\n}\n"
  }
};
})();
(node as any).hash = '418a4db32bbc1a0499f8942b1d98fe5a';
export default node;
