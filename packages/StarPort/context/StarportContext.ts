import { CSSProperties, Dispatch, SetStateAction, createContext } from "react";
type IStarportContext = {
    metaData :CSSProperties,
    setMetaData:Dispatch<SetStateAction<CSSProperties>>
}
export const StarportContext = createContext<IStarportContext>({} as IStarportContext )