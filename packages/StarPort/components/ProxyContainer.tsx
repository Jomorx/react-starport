import React, {
  FC,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StarportContext } from "../context/StarportContext";
import { createPortal } from "react-dom";

type IProxyContainer = {
  RenderSlot: FC<any>;
  port: number;
}
const defaultStyle = {
  position: "fixed",
  transition: "all 0.5s linear",
};
const timer = new Map();
const ProxyContainer: FC<IProxyContainer> = (props) => {
  const { RenderSlot, port } = props;
  const { metaData, proxyElArr, setLandedMap } =
    useContext(StarportContext);
  const { style, ...attrs } = metaData?.[port] ?? { style: {} };

  const [landed, setLanded] = useState(false);
  const [divStyle, setDivStyle] = useState({});

  const update = async () => {
    // 起飞
    const bounding = proxyElArr[port]?.el?.getBoundingClientRect();
    // 消失时候的样式
    if (!proxyElArr[port]?.isActive) {
      setDivStyle({
        ...defaultStyle,
        top: bounding?.top ?? 0,
        left: bounding?.left ?? 0,
        transform: "scale(0)",
        pointerEvents: "none",
      });
    } else {
      setDivStyle({
        ...defaultStyle,
        top: bounding?.top ?? 0,
        left: bounding?.left ?? 0,
      });
    }
    clearTimeout(timer.get(port));
    const time = setTimeout(() => {
      if (proxyElArr[port]?.isActive) {
        setLanded(true);
      }
    }, 700);
    timer.set(port, time);
  };
  // 当metaData变化的时候起飞
  useEffect(() => {
    update();
  }, [metaData, proxyElArr]);
  useEffect(() => {
    // 注册 setLanded函数
    setLandedMap((prev) => ({ ...prev, [port]: setLanded }));
  }, [port]);
  return (
    <div style={divStyle}>
      {metaData[port] &&
        (landed && proxyElArr[port]?.el ? (
          createPortal(
            <RenderSlot style={style} {...attrs} />,
            proxyElArr[port].el!
          )
        ) : (
          <RenderSlot style={style} {...attrs} />
        ))}
    </div>
  );
};

export default memo(ProxyContainer);
