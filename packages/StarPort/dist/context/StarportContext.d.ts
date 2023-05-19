import React, { Dispatch, SetStateAction } from "react";
type IStarportContext<M, E, P> = {
    metaData: M;
    setMetaData: Dispatch<SetStateAction<M>>;
    proxyElArr: E;
    setProxyElArr: Dispatch<SetStateAction<E>>;
    landedMap: P;
    setLandedMap: Dispatch<SetStateAction<P>>;
};
export type TProxyElArr = Record<PropertyKey, {
    el: HTMLElement | null;
    isActive: boolean;
}>;
export declare const StarportContext: React.Context<IStarportContext<Record<PropertyKey, any>, TProxyElArr, Record<PropertyKey, React.Dispatch<React.SetStateAction<boolean>>>>>;
export {};
