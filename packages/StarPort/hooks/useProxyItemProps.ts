import { useContext } from "react"
import { StarportContext } from "../context/StarportContext"

export const useProxyItemProps = (port:number)=>{
    const {metaData} = useContext(StarportContext)   
   
    return metaData[port]
}