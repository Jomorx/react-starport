import React, { FC, ReactElement, useEffect, useRef } from "react";
import { useAlive } from "../context/AliveContext";
type TKeepAlive = {
  children: ReactElement;
  port: number;
};
export const KeepAlive: FC<TKeepAlive> = ({ children, port }) => {
  const { getElement } = useAlive();
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ele = getElement(port, children)
    divRef.current?.appendChild(ele)
  }, []);
  return <div ref={divRef} />;
};
