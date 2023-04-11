import React, { useCallback, useMemo } from 'react'
import ProxyItem from 'StarPort/components/ProxyItem'

const Info = () => {
  const style = useMemo(()=>{return{width:"100px",height:"100px",borderRadius:"50%"} },[])
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <ProxyItem style={style}/>
    </div>
  )
}

export default Info
