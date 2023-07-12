import React, { CSSProperties, useEffect, useState } from 'react'
const TheImage:React.FC<{style:CSSProperties,src:string}> = (props) => {
  const [counter,setCounter] = useState(0)
  const {src="https://img2.baidu.com/it/u=872060757,4025482950&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=485"} = props
  useEffect(()=>{
    console.log(111);
  },[])
  return (
    <div style={{width:"100%",height:"100%"}} >
    <button style={{position:"absolute",zIndex:10000}} onClick={(e)=>{
      setCounter(counter+1)
      e.stopPropagation()
    }}>{counter}</button>
     <img 
    
      style={{width:"100%",height:"100%"}} src={src} alt="" /> 
    </div>
  )
}

export default TheImage