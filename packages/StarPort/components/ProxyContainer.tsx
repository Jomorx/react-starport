import React, { CSSProperties, FC, ReactElement, useMemo } from 'react'
type IProxyContainer = {
  RenderSlot:()=>ReactElement
}
const ProxyContainer:FC<IProxyContainer> = ({RenderSlot}) => {
  const getStyle = useMemo<CSSProperties>(()=>{
    return {
      position:"fixed",
    }
  },[])
  return (
    <div>
      <RenderSlot />
    </div>
  )
}

export default ProxyContainer
