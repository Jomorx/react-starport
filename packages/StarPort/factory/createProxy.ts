import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
import TheImage from "../../../play/components/TheImage";
type ICreateProxy<T> = {
  deActiveStyle: CSSProperties;
  activeStyle: CSSProperties;
  element:T
};
const createProxy = <T extends FC<any>>(props: ICreateProxy<T>) => {
  return []
};

export default createProxy;

const [element] = createProxy({activeStyle:{},deActiveStyle:{},element:TheImage})