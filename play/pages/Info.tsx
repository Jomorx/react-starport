import React, { useCallback, useMemo, useState } from 'react'
import ProxyItem from 'StarPort/components/ProxyItem'
import { imageArr } from '../coomposables/data'

const Info = () => {


  const style = useMemo(()=>{return{width:"100px",height:"100px",borderRadius:"50%"} },[])
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {
        imageArr.map((src,index)=><ProxyItem style={style} src={src} port={index} key={index}/>)
      }
    </div>
  )
}

export default Info
