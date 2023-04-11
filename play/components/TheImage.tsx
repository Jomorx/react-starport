import React, { CSSProperties, useState } from 'react'
import useMounted from '../../packages/hooks/useMounted'

const TheImage:React.FC<{metaData:CSSProperties}> = ({metaData}) => {
  const [counter,setCounter]=useState(0)
  return (
    <>
     <img onClick={()=>setCounter(counter+1)} style={{height:"100%",width:"100%",...metaData,transition:"all 0.3s ease-in-out"}} src="https://img2.baidu.com/it/u=872060757,4025482950&fm=253&fmt=auto&app=138&f=JPEG?w=776&h=485" alt="" /> 
    {counter}
    </>
  )
}

export default TheImage
