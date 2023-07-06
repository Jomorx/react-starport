import React, { FC, ReactElement, useRef, useState } from "react";
import { AliveContext } from "../context/AliveContext";
import { createPortal } from "react-dom";
type TAliveScope = {
  children: ReactElement;
};
type TAliveMap = Record<
  number,
  { element: HTMLDivElement; node: ReactElement }
>;
const AliveScope: FC<TAliveScope> = ({ children }) => {
  const [aliveMap, setAliveMap] = useState<TAliveMap>({});
  const getElement = (port: number, node: ReactElement) => {
    if (!aliveMap[port]) {
      // 如果没有缓存
      const element = document.createElement("div");
      setAliveMap((prev) => ({ ...prev, [port]: { element, node } }));
      return element;
    } else {
      // 如果已经缓存有
      return aliveMap[port].element;
    }
  };
  return (
    <AliveContext.Provider value={{ getElement }}>
      {children}
      {Object.entries(aliveMap).map(([port, { element, node }]) => (
        <React.Fragment key={port}>{port}{createPortal(node ,element)}</React.Fragment>
      ))}
    </AliveContext.Provider>
  );
};
export { AliveScope };
