import React, {
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import useMounted from "../../hooks/useMounted";
import { StarportContext } from "../context/StarportContext";
type IProxyItem = {
  style: React.CSSProperties;
} & any;
const proxyItem: React.FC<IProxyItem> = (props) => {
  const el = useRef<HTMLDivElement>(null);
  const { setMetaData, setProxyElArr } = useContext(StarportContext);
  const { style, port } = props;
  useEffect(() => {
    setMetaData((prev)=>({...prev,[port]:props}))
  }, [props]);
  const update = () => {
    setProxyElArr((prev) => ({ ...prev }));
  };
  
  useMounted(() => {
    setProxyElArr((prev) => ({ ...prev, [port]: {el:el.current,isActive:true} }));
    window.addEventListener("resize", update);
    return () => {
    setProxyElArr((prev) => ({ ...prev, [port]:  {...prev[port],isActive:false}  }));
      window.removeEventListener("resize", update);
    };
  });
  if (!style) return null;
  return <div ref={el} style={style}></div>;
};

export default memo(proxyItem);
