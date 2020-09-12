/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsTable_clients = {
    readonly id: string | null;
    readonly name: string | null;
    readonly email: string | null;
    readonly " $refType": "ClientsTable_clients";
};
export type ClientsTable_clients$data = ClientsTable_clients;
export type ClientsTable_clients$key = {
    readonly " $data"?: ClientsTable_clients$data;
    readonly " $fragmentRefs": FragmentRefs<"ClientsTable_clients">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientsTable_clients",
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
  "type": "ClientType"
};
(node as any).hash = '56197486ed8952e197bfc727761912e8';
export default node;
