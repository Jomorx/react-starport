import { CSSProperties, Dispatch, SetStateAction, createContext, useRef } from "react";
type IStarportContext<M,E,P> = {
    metaData :M,
    setMetaData:Dispatch<SetStateAction<M>>,
    proxyElArr:E
    setProxyElArr:Dispatch<SetStateAction<E>>,
    landedMap:P,
    setLandedMap:Dispatch<P>,
    stateMap:Map<number,number>
}
export type TProxyElArr = Record<string,{el:HTMLElement|undefined,isActive:boolean}>
export const StarportContext = createContext<IStarportContext<CSSProperties,TProxyElArr,Record<PropertyKey,Dispatch<boolean>>>>({} as any )