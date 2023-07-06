import React, { CSSProperties, useEffect, useState } from 'react'
const TheImage:React.FC<{style:CSSProperties,src:string}> = (props) => {
  console.log(props);
  
  const [counter,setCounter] = useState(0)
  const {style={},src="https://img2.baidu.com/it/u=872060757,4025482950&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=485",...attrs} = props
  return (
    <>
    <button onClick={()=>setCounter(counter+1)}>{counter}</button>
     <img 
     {...attrs}
       style={{...style}} src={src} alt="" /> 
    </>
  )
}

export default TheImage