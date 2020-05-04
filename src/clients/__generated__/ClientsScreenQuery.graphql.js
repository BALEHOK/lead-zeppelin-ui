/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ClientsScreenQueryVariables = {||};
export type ClientsScreenQueryResponse = {|
  +clients: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +email: ?string,
        +leads: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +source: ?string,
              +campaign: ?string,
              +funnelStep: ?{|
                +name: ?string
              |},
            |}
          |}>
        |},
        +payments: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +amountPaid: ?number,
            |}
          |}>
        |},
      |}
    |}>
  |}
|};
export type ClientsScreenQuery = {|
  variables: ClientsScreenQueryVariables,
  response: ClientsScreenQueryResponse,
|};
*/


/*
query ClientsScreenQuery {
  clients {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "source",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "campaign",
  "storageKey": null
},
v5 = {
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
                  (v1/*: any*/),
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
                              (v0/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FunnelStepObject",
                                "kind": "LinkedField",
                                "name": "funnelStep",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/)
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
                  (v5/*: any*/)
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
                  (v1/*: any*/),
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
                              (v0/*: any*/),
                              (v3/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "FunnelStepObject",
                                "kind": "LinkedField",
                                "name": "funnelStep",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
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
                  (v5/*: any*/)
                ],
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
    "text": "query ClientsScreenQuery {\n  clients {\n    edges {\n      node {\n        id\n        name\n        email\n        leads {\n          edges {\n            node {\n              id\n              source\n              campaign\n              funnelStep {\n                name\n                id\n              }\n            }\n          }\n        }\n        payments {\n          edges {\n            node {\n              id\n              amountPaid\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4126ba8efd642061ffef14e2937ae2e';

module.exports = node;
