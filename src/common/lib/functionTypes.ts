export type TFunction<TResult = void> = () => TResult;
export type TFunction1<TParam, TResult = void> = (param: TParam) => TResult;
export type TFunction2<TParam1, TParam2, TResult = void> = (
  param1: TParam1,
  param2: TParam2
) => TResult;
