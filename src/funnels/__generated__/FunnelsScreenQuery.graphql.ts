/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FunnelsScreenQueryVariables = {
    code: string;
};
export type FunnelsScreenQueryResponse = {
    readonly account: {
        readonly funnels: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Funnels_funnels">;
        } | null> | null;
    } | null;
};
export type FunnelsScreenQuery = {
    readonly response: FunnelsScreenQueryResponse;
    readonly variables: FunnelsScreenQueryVariables;
};



/*
query FunnelsScreenQuery(
  $code: String!
) {
  account(code: $code) {
    funnels {
      ...Funnels_funnels
    }
  }
}

fragment Funnels_funnels on FunnelType {
  id
  name
  steps {
    id
    name
  }
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FunnelsScreenQuery",
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
            "concreteType": "FunnelType",
            "kind": "LinkedField",
            "name": "funnels",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Funnels_funnels"
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
    "name": "FunnelsScreenQuery",
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
            "concreteType": "FunnelType",
            "kind": "LinkedField",
            "name": "funnels",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "FunnelStepType",
                "kind": "LinkedField",
                "name": "steps",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
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
    "name": "FunnelsScreenQuery",
    "operationKind": "query",
    "text": "query FunnelsScreenQuery(\n  $code: String!\n) {\n  account(code: $code) {\n    funnels {\n      ...Funnels_funnels\n    }\n  }\n}\n\nfragment Funnels_funnels on FunnelType {\n  id\n  name\n  steps {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b139ea7a5c7cfd76c4263c193045dd73';
export default node;
