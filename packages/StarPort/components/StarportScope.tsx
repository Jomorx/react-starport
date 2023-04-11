import React, { CSSProperties, useRef, useState } from 'react'
import { StarportContext } from '../context/StarportContext'

const StarportScope = ({children}) => {
  const [metaData,setMetaData] = useState<CSSProperties>({})
  const [proxyElArr,setProxyElArr]= useState<Record<string,HTMLElement|undefined>>({});
  return (
    <StarportContext.Provider value={{metaData,setMetaData,proxyElArr,setProxyElArr}}>
      {children}
    </StarportContext.Provider>
  )
}

export default StarportScope
