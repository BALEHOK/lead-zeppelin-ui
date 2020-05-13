/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsScreenQueryVariables = {};
export type ClientsScreenQueryResponse = {
    readonly account: {
        readonly id: string;
        readonly clients: {
            readonly " $fragmentRefs": FragmentRefs<"ClientsTable_clients">;
        } | null;
    } | null;
};
export type ClientsScreenQuery = {
    readonly response: ClientsScreenQueryResponse;
    readonly variables: ClientsScreenQueryVariables;
};



/*
query ClientsScreenQuery {
  account {
    id
    clients(first: 2147483647) {
      ...ClientsTable_clients
    }
  }
}

fragment ClientsTable_clients on ClientObjectConnection {
  edges {
    node {
      id
      name
      email
      leads {
        edges {
          node {
            id
            source
            campaign
            funnelStep {
              name
              id
            }
          }
        }
      }
      payments {
        edges {
          node {
            id
            amountPaid
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountObject",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ClientObjectConnection",
            "kind": "LinkedField",
            "name": "clients",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientsTable_clients"
              }
            ],
            "storageKey": "clients(first:2147483647)"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AccountObject",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "ClientObjectConnection",
            "kind": "LinkedField",
            "name": "clients",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClientObjectEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ClientObject",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "email",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LeadObjectConnection",
                        "kind": "LinkedField",
                        "name": "leads",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "LeadObjectEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "LeadObject",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v0/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "source",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "campaign",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "FunnelStepObject",
                                    "kind": "LinkedField",
                                    "name": "funnelStep",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v0/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PaymentObjectConnection",
                        "kind": "LinkedField",
                        "name": "payments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PaymentObjectEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "PaymentObject",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v0/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "amountPaid",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "clients(first:2147483647)"
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
    "text": "query ClientsScreenQuery {\n  account {\n    id\n    clients(first: 2147483647) {\n      ...ClientsTable_clients\n    }\n  }\n}\n\nfragment ClientsTable_clients on ClientObjectConnection {\n  edges {\n    node {\n      id\n      name\n      email\n      leads {\n        edges {\n          node {\n            id\n            source\n            campaign\n            funnelStep {\n              name\n              id\n            }\n          }\n        }\n      }\n      payments {\n        edges {\n          node {\n            id\n            amountPaid\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '06a03f2ae4f9d932fba6c2730267d427';
export default node;
