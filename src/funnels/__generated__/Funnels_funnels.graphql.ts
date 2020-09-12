/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Funnels_funnels = {
    readonly id: string | null;
    readonly name: string | null;
    readonly steps: ReadonlyArray<{
        readonly id: string | null;
        readonly name: string | null;
    } | null> | null;
    readonly " $refType": "Funnels_funnels";
};
export type Funnels_funnels$data = Funnels_funnels;
export type Funnels_funnels$key = {
    readonly " $data"?: Funnels_funnels$data;
    readonly " $fragmentRefs": FragmentRefs<"Funnels_funnels">;
};



const node: ReaderFragment = (function(){
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Funnels_funnels",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "FunnelStepType",
      "kind": "LinkedField",
      "name": "steps",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "FunnelType"
};
})();
(node as any).hash = '86c1ef6d9d9ff6fa77503da5652ea1e9';
export default node;
