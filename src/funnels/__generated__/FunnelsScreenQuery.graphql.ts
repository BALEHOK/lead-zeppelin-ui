/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FunnelsScreenQueryVariables = {};
export type FunnelsScreenQueryResponse = {
    readonly account: {
        readonly id: string;
        readonly funnels: {
            readonly " $fragmentRefs": FragmentRefs<"Funnels_funnels">;
        } | null;
    } | null;
};
export type FunnelsScreenQuery = {
    readonly response: FunnelsScreenQueryResponse;
    readonly variables: FunnelsScreenQueryVariables;
};



/*
query FunnelsScreenQuery {
  account {
    id
    funnels(first: 2147483647) {
      ...Funnels_funnels
    }
  }
}

fragment Funnels_funnels on FunnelObjectConnection {
  edges {
    node {
      id
      name
      steps {
        edges {
          node {
            id
            name
            leads {
              edges {
                node {
                  id
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
    "name": "FunnelsScreenQuery",
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
            "concreteType": "FunnelObjectConnection",
            "kind": "LinkedField",
            "name": "funnels",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Funnels_funnels"
              }
            ],
            "storageKey": "funnels(first:2147483647)"
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
    "name": "FunnelsScreenQuery",
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
            "concreteType": "FunnelObjectConnection",
            "kind": "LinkedField",
            "name": "funnels",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FunnelObjectEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FunnelObject",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FunnelStepObjectConnection",
                        "kind": "LinkedField",
                        "name": "steps",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FunnelStepObjectEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FunnelStepObject",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v0/*: any*/),
                                  (v2/*: any*/),
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
                                              (v0/*: any*/)
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
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "funnels(first:2147483647)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FunnelsScreenQuery",
    "operationKind": "query",
    "text": "query FunnelsScreenQuery {\n  account {\n    id\n    funnels(first: 2147483647) {\n      ...Funnels_funnels\n    }\n  }\n}\n\nfragment Funnels_funnels on FunnelObjectConnection {\n  edges {\n    node {\n      id\n      name\n      steps {\n        edges {\n          node {\n            id\n            name\n            leads {\n              edges {\n                node {\n                  id\n                }\n              }\n            }\n            payments {\n              edges {\n                node {\n                  id\n                  amountPaid\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '04a23f855684dcb4ad0d7042400d9812';
export default node;
