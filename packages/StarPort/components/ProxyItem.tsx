import React, {
  memo,
  useContext,
  useEffect,
  useRef,
} from "react";
import { StarportContext } from "../context/StarportContext";
type IProxyItem = {
  style: React.CSSProperties;
} & any;
const proxyItem: React.FC<IProxyItem> = (props) => {
  const el = useRef<HTMLDivElement>(null);
  const { setMetaData, setProxyElArr,landedMap} = useContext(StarportContext);
  
  const { style, port } = props;



  const update = async () => {
    setMetaData((prev)=>({...prev,[port]:props}))
  };
  
  useEffect(() => {
    // landedMap[props.port] && landedMap[props.port](false)
    update()
    setProxyElArr((prev) => ({ ...prev, [port]: {el:el.current,isActive:true} }));

    window.addEventListener("resize", update);  

    return () => {
      Promise.resolve().then(() => landedMap[props.port] && landedMap[props.port](false))
    setProxyElArr((prev) => ({ ...prev, [port]: {el:el.current,isActive:false} }));
    
    window.removeEventListener("resize", update);
    };
  },[props,landedMap]);
  
  return <div ref={el} style={{...style,transition:"all 0.5s linear"}}></div>;
};

export default memo(proxyItem);
