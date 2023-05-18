import React,{ Dispatch, SetStateAction, createContext } from "react";
type IStarportContext<M,E,P> = {
    metaData :Record<any,M>,
    setMetaData:Dispatch<SetStateAction<Record<any,M>>>,
    proxyElArr:E
    setProxyElArr:Dispatch<SetStateAction<E>>,
    landedMap:P,
    setLandedMap:Dispatch<SetStateAction<P>>,
    stateMap:Map<number,number>
}
export type TProxyElArr = Record<string,{el:HTMLElement|null,isActive:boolean}>
export const StarportContext = createContext<IStarportContext<any,TProxyElArr,Record<PropertyKey,Dispatch<boolean>>>>({} as any )