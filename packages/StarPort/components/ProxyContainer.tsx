import React, { CSSProperties, FC, memo, useContext, useMemo } from "react";
import { StarportContext } from "../context/StarportContext";
type IProxyContainer = {
  RenderSlot: FC<any>;
  port: number;
};
const ProxyContainer: FC<IProxyContainer> = (props) => {
  const { RenderSlot, port } = props;
  const { metaData, proxyElArr } = useContext(StarportContext);
  const { style, ...attrs } = metaData?.[port] ?? { style: {} };
  console.log(proxyElArr);

  const defaultStyle = useMemo<CSSProperties>(() => {
    const bounding = proxyElArr[port]?.el?.getBoundingClientRect();
    if (!proxyElArr[port]?.isActive) {
      console.log(bounding);
      
      return {
        position: "fixed",
        top: bounding?.top ?? 0,
        left: bounding?.left ?? 0,
        transform: "scale(0)",
        pointerEvents: "none",
      };
    }

    return {
      position: "fixed",
      top: bounding?.top ?? 0,
      left: bounding?.left ?? 0,
    };
  }, [proxyElArr]);
  console.log(attrs);
  
  return (
    <div
      onTransitionEnd={(e) => {}}
      style={{ ...defaultStyle, transition: "all 0.3s linear" }}
    >
      <RenderSlot style={style} {...attrs} />
    </div>
  );
};

export default memo(ProxyContainer);
