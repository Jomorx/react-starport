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
};
const proxyItem: React.FC<IProxyItem> = ({ style }) => {
  const el = useRef<HTMLDivElement>(null);
  const { setMetaData, setProxyElArr } = useContext(StarportContext);
  console.log("item render");
  
  useEffect(() => {
    console.log(111);
    
    setMetaData(style);
  }, [style]);
  const update = () => {
    setProxyElArr((prev) => ({ ...prev }));
  };
  useMounted(() => {
    setProxyElArr((prev) => ({ ...prev, 1: el.current! }));
    window.addEventListener("resize", update);
    return () => {
      setProxyElArr((prev) => ({ ...prev, 1: undefined }));
      window.removeEventListener("resize", update);
    };
  });
  if (!style) return null;
  return <div ref={el} style={style}></div>;
};

export default memo(proxyItem);
