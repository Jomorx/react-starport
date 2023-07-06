import { ReactElement, createContext, useContext } from "react";
type TAliveContext = {
    getElement:(port:number,node:ReactElement)=>HTMLDivElement
}
export const AliveContext = createContext<TAliveContext>({} as TAliveContext)
export const useAlive = ()=>useContext(AliveContext)