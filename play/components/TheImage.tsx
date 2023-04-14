import React, { CSSProperties, useState } from 'react'
import useMounted from '../../packages/hooks/useMounted'

const TheImage:React.FC<{style:CSSProperties,src:string}> = (props) => {
  const {style={},src="https://img2.baidu.com/it/u=872060757,4025482950&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=485",...attrs} = props
  console.log();
  
  return (
    <>
     <img {...attrs}  style={{height:"100%",width:"100%",...style,transition:"all 0.3s ease-in-out"}} src={src} alt="" /> 
    </>
  )
}

export default TheImage
// 