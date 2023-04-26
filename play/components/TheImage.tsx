import React, { CSSProperties } from 'react'

const TheImage:React.FC<{style:CSSProperties,src:string}> = (props) => {
  const {style={},src="https://img2.baidu.com/it/u=872060757,4025482950&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=485",...attrs} = props
  return (
    <>
     <img {...attrs}  style={{...style,transition:"all 0.5s linear"}} src={src} alt="" /> 
    </>
  )
}

export default TheImage