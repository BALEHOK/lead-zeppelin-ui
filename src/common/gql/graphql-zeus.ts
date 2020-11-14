/* tslint:disable */
/* eslint-disable */

import { apiUrl } from '../lib/api';

export type ValueTypes = {
  ['AccountType']: AliasType<{
    id?: true;
    name?: true;
    code?: true;
    funnels?: ValueTypes['FunnelType'];
    clients?: ValueTypes['ClientType'];
    leads?: ValueTypes['LeadType'];
    payments?: ValueTypes['PaymentType'];
    __typename?: true;
  }>;
  ['ClientType']: AliasType<{
    id?: true;
    accountId?: true;
    name?: true;
    email?: true;
    phone?: true;
    vk?: true;
    fb?: true;
    gc?: true;
    leads?: ValueTypes['LeadType'];
    __typename?: true;
  }>;
  ['FunnelStepType']: AliasType<{
    id?: true;
    name?: true;
    code?: true;
    __typename?: true;
  }>;
  ['FunnelType']: AliasType<{
    id?: true;
    accountId?: true;
    name?: true;
    steps?: ValueTypes['FunnelStepType'];
    __typename?: true;
  }>;
  ['LeadType']: AliasType<{
    id?: true;
    uid?: true;
    client?: ValueTypes['ClientType'];
    created?: true;
    channel?: true;
    source?: true;
    medium?: true;
    campaign?: true;
    content?: true;
    funnelStep?: ValueTypes['FunnelStepType'];
    payments?: ValueTypes['PaymentType'];
    __typename?: true;
  }>;
  ['Mutation']: AliasType<{
    createAccount?: [
      { code?: string; name?: string },
      ValueTypes['AccountType']
    ];
    deleteAccount?: [{ id?: string }, true];
    updateAccount?: [
      { id?: string; content?: string },
      ValueTypes['AccountType']
    ];
    createFunnel?: [
      { accountId: string; name: string },
      ValueTypes['FunnelType']
    ];
    createFunnelStep?: [
      { funnelId: string; code: string; name: string },
      ValueTypes['FunnelType']
    ];
    __typename?: true;
  }>;
  ['PaymentType']: AliasType<{
    id?: true;
    amount?: true;
    created?: true;
    lead?: ValueTypes['LeadType'];
    __typename?: true;
  }>;
  ['Query']: AliasType<{
    account?: [{ code: string }, ValueTypes['AccountType']];
    accounts?: ValueTypes['AccountType'];
    funnel?: [{ id: string }, ValueTypes['FunnelType']];
    __typename?: true;
  }>;
};

export type PartialObjects = {
  ['AccountType']: {
    __typename?: 'AccountType';
    id?: string;
    name?: string;
    code?: string;
    funnels?: (PartialObjects['FunnelType'] | undefined)[];
    clients?: (PartialObjects['ClientType'] | undefined)[];
    leads?: (PartialObjects['LeadType'] | undefined)[];
    payments?: (PartialObjects['PaymentType'] | undefined)[];
  };
  ['ClientType']: {
    __typename?: 'ClientType';
    id?: string;
    accountId?: string;
    name?: string;
    email?: string;
    phone?: string;
    vk?: string;
    fb?: string;
    gc?: string;
    leads?: (PartialObjects['LeadType'] | undefined)[];
  };
  ['FunnelStepType']: {
    __typename?: 'FunnelStepType';
    id?: string;
    name?: string;
    code?: string;
  };
  ['FunnelType']: {
    __typename?: 'FunnelType';
    id?: string;
    accountId?: string;
    name?: string;
    steps?: (PartialObjects['FunnelStepType'] | undefined)[];
  };
  ['LeadType']: {
    __typename?: 'LeadType';
    id?: string;
    uid?: string;
    client?: PartialObjects['ClientType'];
    created?: string;
    channel?: string;
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    funnelStep?: PartialObjects['FunnelStepType'];
    payments?: (PartialObjects['PaymentType'] | undefined)[];
  };
  ['Mutation']: {
    __typename?: 'Mutation';
    createAccount?: PartialObjects['AccountType'];
    deleteAccount?: string;
    updateAccount?: PartialObjects['AccountType'];
    createFunnel?: PartialObjects['FunnelType'];
    createFunnelStep?: PartialObjects['FunnelType'];
  };
  ['PaymentType']: {
    __typename?: 'PaymentType';
    id?: string;
    amount?: number;
    created?: string;
    lead?: PartialObjects['LeadType'];
  };
  ['Query']: {
    __typename?: 'Query';
    account?: PartialObjects['AccountType'];
    accounts?: (PartialObjects['AccountType'] | undefined)[];
    funnel?: PartialObjects['FunnelType'];
  };
};

export type AccountType = {
  __typename?: 'AccountType';
  id?: string;
  name?: string;
  code?: string;
  funnels?: (FunnelType | undefined)[];
  clients?: (ClientType | undefined)[];
  leads?: (LeadType | undefined)[];
  payments?: (PaymentType | undefined)[];
};

export type ClientType = {
  __typename?: 'ClientType';
  id?: string;
  accountId?: string;
  name?: string;
  email?: string;
  phone?: string;
  vk?: string;
  fb?: string;
  gc?: string;
  leads?: (LeadType | undefined)[];
};

export type FunnelStepType = {
  __typename?: 'FunnelStepType';
  id?: string;
  name?: string;
  code?: string;
};

export type FunnelType = {
  __typename?: 'FunnelType';
  id?: string;
  accountId?: string;
  name?: string;
  steps?: (FunnelStepType | undefined)[];
};

export type LeadType = {
  __typename?: 'LeadType';
  id?: string;
  uid?: string;
  client?: ClientType;
  created?: string;
  channel?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  funnelStep?: FunnelStepType;
  payments?: (PaymentType | undefined)[];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: AccountType;
  deleteAccount?: string;
  updateAccount?: AccountType;
  createFunnel?: FunnelType;
  createFunnelStep?: FunnelType;
};

export type PaymentType = {
  __typename?: 'PaymentType';
  id?: string;
  amount?: number;
  created?: string;
  lead?: LeadType;
};

export type Query = {
  __typename?: 'Query';
  account?: AccountType;
  accounts?: (AccountType | undefined)[];
  funnel?: FunnelType;
};

export const AllTypesProps: Record<string, any> = {
  Mutation: {
    createAccount: {
      code: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: false,
      },
      name: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    deleteAccount: {
      id: {
        type: 'ID',
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    updateAccount: {
      id: {
        type: 'ID',
        array: false,
        arrayRequired: false,
        required: false,
      },
      content: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    createFunnel: {
      accountId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
      name: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    createFunnelStep: {
      funnelId: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
      code: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
      name: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  Query: {
    account: {
      code: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    funnel: {
      id: {
        type: 'String',
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
};

export const ReturnTypes: Record<string, any> = {
  AccountType: {
    id: 'String',
    name: 'String',
    code: 'String',
    funnels: 'FunnelType',
    clients: 'ClientType',
    leads: 'LeadType',
    payments: 'PaymentType',
  },
  ClientType: {
    id: 'String',
    accountId: 'String',
    name: 'String',
    email: 'String',
    phone: 'String',
    vk: 'String',
    fb: 'String',
    gc: 'String',
    leads: 'LeadType',
  },
  FunnelStepType: {
    id: 'String',
    name: 'String',
    code: 'String',
  },
  FunnelType: {
    id: 'String',
    accountId: 'String',
    name: 'String',
    steps: 'FunnelStepType',
  },
  LeadType: {
    id: 'String',
    uid: 'String',
    client: 'ClientType',
    created: 'String',
    channel: 'String',
    source: 'String',
    medium: 'String',
    campaign: 'String',
    content: 'String',
    funnelStep: 'FunnelStepType',
    payments: 'PaymentType',
  },
  Mutation: {
    createAccount: 'AccountType',
    deleteAccount: 'ID',
    updateAccount: 'AccountType',
    createFunnel: 'FunnelType',
    createFunnelStep: 'FunnelType',
  },
  PaymentType: {
    id: 'String',
    amount: 'Int',
    created: 'String',
    lead: 'LeadType',
  },
  Query: {
    account: 'AccountType',
    accounts: 'AccountType',
    funnel: 'FunnelType',
  },
};

export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}

type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<
  F extends [infer ARGS, any] ? ARGS : undefined
>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any>
  ? P
  : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type ValuesOf<T> = T[keyof T];

export type MapResolve<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
}
  ? ValuesOf<
      {
        [k in keyof SRC['__resolve'] & keyof DST]: {
          [rk in keyof SRC['__resolve'][k] &
            keyof DST[k]]: LastMapTypeSRCResolver<
            SRC['__resolve'][k][rk],
            DST[k][rk]
          >;
        } & {
          __typename: SRC['__resolve'][k]['__typename'];
        };
      }
    >
  : never;

export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: Record<string, { __typename?: string }> & infer IMPLEMENTORS;
}
  ? (MapResolve<SRC, DST> extends never ? {} : MapResolve<SRC, DST>) &
      {
        [k in keyof SRC['__interface'] & keyof DST]: LastMapTypeSRCResolver<
          SRC['__interface'][k],
          DST[k]
        >;
      }
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };

type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST['__alias']]: Required<SRC> extends Anify<
        DST['__alias'][A]
      >
        ? MapType<Required<SRC>, DST['__alias'][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, '__alias'>]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>
) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (
  query: string,
  variables?: Record<string, any>
) => Promise<any>;

export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays,
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  const isArrayRequired = resolvedValue.arrayRequired;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : '';
    let t = `${typeResolved}`;
    if (isArray) {
      if (isRequired) {
        t = `${t}!`;
      }
      t = `[${t}]`;
      if (isArrayRequired) {
        t = `${t}!`;
      }
    } else {
      if (isRequired) {
        t = `${t}!`;
      }
    }
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) =>
        TypesPropsResolver({ value: v, type, name, key, blockArrays: true })
      )
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) =>
            `${ak}:${TypesPropsResolver({
              value: value[ak],
              type: typeResolved,
              name: ak,
            })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: any[]) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter(
    (k) => typeof values[k] !== 'undefined'
  );

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v,
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v,
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (
  k: string,
  v: boolean | string | { [x: string]: boolean | string }
) =>
  typeof v === 'boolean'
    ? k
    : typeof v === 'object'
    ? `${k}{${objectToTree(v)}}`
    : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
          if (k === '__alias') {
            Object.keys(a[k]).map((aliasKey) => {
              const aliasOperations = a[k][aliasKey];
              const aliasOperationName = Object.keys(aliasOperations)[0];
              const aliasOperation = aliasOperations[aliasOperationName];
              b[
                `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
              ] = traverseToSeekArrays(
                [...parent, aliasOperationName],
                aliasOperation
              );
            });
          } else {
            b[k] = traverseToSeekArrays([...parent, k], a[k]);
          }
        });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(
        variable,
        variable.split('__ZEUS_VAR__')[0]
      );
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (
  t: 'query' | 'mutation' | 'subscription',
  tName: string
) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;

const fullChainConstruct = (fn: FetchFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables).then((r: any) => {
    seekForAliases(r);
    return r;
  });

const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;

const handleFetchResponse = (
  response: Parameters<
    Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>
  >[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (
  query: string,
  variables: Record<string, any> = {}
) => {
  let fetchFunction = fetch;
  let queryString = query;
  let fetchOptions = options[1] || {};
  if (fetchOptions.method && fetchOptions.method === 'GET') {
    queryString = encodeURIComponent(query);
    return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  }
  return fetchFunction(`${options[0]}`, {
    body: JSON.stringify({ query: queryString, variables }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...fetchOptions,
  })
    .then(handleFetchResponse)
    .then((response: GraphQLResponse) => {
      if (response.errors) {
        throw new GraphQLError(response);
      }
      return response.data;
    });
};

export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes['Query'], Query>,
  mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes['Mutation'], Mutation>,
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes['Query'], Query>,
  mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(
      o,
      variables
    ).then((response: any) => response)) as OperationToGraphQL<
    ValueTypes['Mutation'],
    Mutation
  >,
});
export const Zeus = {
  query: (o: ValueTypes['Query']) => queryConstruct('query', 'Query')(o),
  mutation: (o: ValueTypes['Mutation']) =>
    queryConstruct('mutation', 'Mutation')(o),
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
    ValueTypes['Query'],
    Query
  >,
  mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
    ValueTypes['Mutation'],
    Mutation
  >,
};
export const Selectors = {
  query: ZeusSelect<ValueTypes['Query']>(),
  mutation: ZeusSelect<ValueTypes['Mutation']>(),
};

export const Gql = Chain(apiUrl);
