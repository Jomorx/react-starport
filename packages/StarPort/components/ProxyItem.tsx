import React, { memo, useRef } from "react";
import useMounted from "../../hooks/useMounted";
type IProxyItem = {
  style: React.CSSProperties;
};
const proxyItem:React.FC<IProxyItem> = ({style}) => {
  const el = useRef<HTMLDivElement>(null);
  useMounted(()=>{
    console.log(el.current?.getBoundingClientRect());
  })
  return <div ref={el} style={style}></div>;
};

export default memo(proxyItem);
