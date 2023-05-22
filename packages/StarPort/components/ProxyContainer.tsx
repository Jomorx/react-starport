import React, {
  CSSProperties,
  FC,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import { StarportContext } from "../context/StarportContext";
import { createPortal } from "react-dom";

type IProxyContainer = {
  RenderSlot: FC<any>;
  port: number;
  deActiveStyle: CSSProperties;
  duration: number;
};

const timer = new Map();
const ProxyContainer: FC<IProxyContainer> = (props) => {
  const { RenderSlot, port } = props;
  const { metaData, proxyElArr, setLandedMap } = useContext(StarportContext);
  const { style, ...attrs } = metaData?.[port] ?? { style: {} };
  const defaultStyle: CSSProperties = {
    position: "fixed",
  };
  const [landed, setLanded] = useState(false);
  const [divStyle, setDivStyle] = useState({});

  const update = async () => {
    // 起飞
    const bounding = proxyElArr[port]?.el?.getBoundingClientRect();
    // 消失时候的样式
    if (!proxyElArr[port]?.isActive) {
      setDivStyle({ ...props.deActiveStyle, ...defaultStyle });
    } else {
      // 落地的时候的样式
      setDivStyle({
        top: bounding?.top,
        left: bounding?.left,
        overflow:"hidden",
        ...defaultStyle,
      });
    }
    clearTimeout(timer.get(port));
    const time = setTimeout(() => {
      if (proxyElArr[port]?.isActive) {
        setLanded(true);
      }
    }, props.duration);
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
