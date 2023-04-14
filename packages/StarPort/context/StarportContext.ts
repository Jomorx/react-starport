import { CSSProperties, Dispatch, SetStateAction, createContext, useRef } from "react";
type IStarportContext<M,E> = {
    metaData :M,
    setMetaData:Dispatch<SetStateAction<M>>,
    proxyElArr:E
    setProxyElArr:Dispatch<SetStateAction<E>>
}
export const StarportContext = createContext<IStarportContext<any,Record<string,{el:HTMLElement|undefined,isActive:boolean}>>>({} as any )