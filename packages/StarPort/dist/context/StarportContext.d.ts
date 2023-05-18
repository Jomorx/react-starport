import React, { Dispatch, SetStateAction } from "react";
type IStarportContext<M, E, P> = {
    metaData: Record<any, M>;
    setMetaData: Dispatch<SetStateAction<Record<any, M>>>;
    proxyElArr: E;
    setProxyElArr: Dispatch<SetStateAction<E>>;
    landedMap: P;
    setLandedMap: Dispatch<SetStateAction<P>>;
    stateMap: Map<number, number>;
};
export type TProxyElArr = Record<string, {
    el: HTMLElement | null;
    isActive: boolean;
}>;
export declare const StarportContext: React.Context<IStarportContext<any, TProxyElArr, Record<PropertyKey, React.Dispatch<boolean>>>>;
export {};
