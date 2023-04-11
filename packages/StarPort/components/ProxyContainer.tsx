import React, {
  CSSProperties,
  FC,
  ReactElement,
  memo,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { StarportContext } from "../context/StarportContext";
type IProxyContainer = {
  RenderSlot: FC<{ metaData: CSSProperties }>;
};
const ProxyContainer: FC<IProxyContainer> = ({ RenderSlot }) => {
  const { metaData, proxyElArr } = useContext(StarportContext);
  const defaultStyle = useMemo<CSSProperties>(() => {
    if(!proxyElArr[1])
    return {
        position: "fixed",
        top: 0,
        left: 0,
        opacity:0,
        pointerEvents:"none"
    }
    const bounding = proxyElArr[1]?.getBoundingClientRect();
    return {
      position: "fixed",
      top: bounding?.top ?? 0,
      left: bounding?.left ?? 0,
    };
  }, [proxyElArr]);
  console.log("render");
  
  return (
    <div onTransitionEnd={(e)=>{
      
    }} style={{...defaultStyle,transition:"all 0.3s linear"}}>
      <RenderSlot metaData={metaData} />
    </div>
  );
};

export default memo(ProxyContainer);
