import React, { CSSProperties, FC, ReactElement, ReactNode, cloneElement } from "react";
import TheImage from "../../../play/components/TheImage";
import ProxyItem from "../components/ProxyItem";
import ProxyContainer from "../components/ProxyContainer";
type ICreateProxy<T> = {
  deActiveStyle: CSSProperties;
  activeStyle: CSSProperties;
  element:T
};
const createProxy = <T extends FC<any>>(props: ICreateProxy<T>) => {
  return [cloneElement(ProxyContainer ,{},null)]
};

export default createProxy;

const [element] = createProxy({activeStyle:{},deActiveStyle:{},element:TheImage})