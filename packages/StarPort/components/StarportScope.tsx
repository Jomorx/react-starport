import React, { CSSProperties, useState } from 'react'
import { StarportContext } from '../context/StarportContext'

const StarportScope = ({children}) => {
  const [metaData,setMetaData] = useState<CSSProperties>({})
  return (
    <StarportContext.Provider value={{metaData,setMetaData}}>
      {children}
    </StarportContext.Provider>
  )
}

export default StarportScope
