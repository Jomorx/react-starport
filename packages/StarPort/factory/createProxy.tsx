import React, { CSSProperties, ComponentProps, FC } from "react";
import TheImage from "../../../play/components/TheImage";
import ProxyItem from "../components/ProxyItem";
import ProxyContainer from "../components/ProxyContainer";
type ICreateProxy<T> = {
  deActiveStyle: CSSProperties;
  activeStyle: CSSProperties;
  RenderSlot: T;
};
const createProxy = <T extends FC<any>>(props: ICreateProxy<T>) => {
  const createContainer = (
    args: Pick<ComponentProps<typeof ProxyContainer>, "port">
  ) => <ProxyContainer {...props} {...args} />;

  return [ProxyItem, createContainer];
};

export default createProxy;

const [proxyItem, proxyContainer] = createProxy({
  activeStyle: {},
  deActiveStyle: {},
  RenderSlot: TheImage,
});
