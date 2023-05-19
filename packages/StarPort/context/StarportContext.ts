import React, {
  CSSProperties,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
type IStarportContext<M, E, P> = {
  metaData: M;
  setMetaData: Dispatch<SetStateAction<M>>;
  proxyElArr: E;
  setProxyElArr: Dispatch<SetStateAction<E>>;
  landedMap: P;
  setLandedMap: Dispatch<SetStateAction<P>>;
};
export type TProxyElArr = Record<
  PropertyKey,
  { el: HTMLElement | null; isActive: boolean }
>;
export const StarportContext = createContext<
  IStarportContext<
    Record<PropertyKey, any>,
    TProxyElArr,
    Record<PropertyKey, Dispatch<SetStateAction<boolean>>>
  >
>({} as any);
