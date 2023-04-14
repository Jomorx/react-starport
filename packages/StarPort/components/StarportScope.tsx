import React, { CSSProperties, useRef, useState } from 'react'
import { StarportContext } from '../context/StarportContext'

const StarportScope = ({children}) => {
  const [metaData,setMetaData] = useState<CSSProperties>({})
  const [proxyElArr,setProxyElArr]= useState<Record<string,{el:HTMLElement|undefined,isActive:boolean}>>({});
  const [landedMap, setLandedMap] = React.useState<Record<number,boolean>>({})

  return (
    <StarportContext.Provider value={{metaData,setMetaData,proxyElArr,setProxyElArr}}>
      {children}
    </StarportContext.Provider>
  )
}

export default StarportScope
