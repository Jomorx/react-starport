import React, {
  HtmlHTMLAttributes,
  memo,
  useContext,
  useEffect,
  useRef,
} from "react";
import { StarportContext } from "../context/StarportContext";
import { resolvedPromise } from "../utils";
type IProxyItem = {
  port: string | number;
  renderProps: any;
} 

const proxyItem: React.FC<IProxyItem> = (props) => {
  const el = useRef<HTMLDivElement>(null);

  const { setMetaData, setProxyElArr, landedMap } = useContext(StarportContext);

  const { port, renderProps } = props;
  console.log(renderProps);
  
  const update = async () => {
    setMetaData((prev) => ({ ...prev, [port]: renderProps }));
  };

  useEffect(() => {
    update();
    setProxyElArr((prev) => ({
      ...prev,
      [port]: { el: el.current, isActive: true },
    }));
    window.addEventListener("resize", update);

    return () => {
      resolvedPromise(() => {
        landedMap[props.port] && landedMap[props.port](false);
      });
      setProxyElArr((prev) => ({
        ...prev,
        [port]: { el: el.current, isActive: false },
      }));
      window.removeEventListener("resize", update);
    };
  }, [props, landedMap]);

  return (
    <div ref={el} style={{ ...renderProps?.style}}></div>
  );
};

export default memo(proxyItem);
