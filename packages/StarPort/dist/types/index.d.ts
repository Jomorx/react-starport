import React, { FC, HtmlHTMLAttributes, ReactNode } from 'react';

type IProxyContainer = {
    RenderSlot: FC<any>;
    port: number;
};
declare const _default$1: React.NamedExoticComponent<IProxyContainer>;

type IProxyItem = {
    port: string | number;
    renderProps: any;
} & HtmlHTMLAttributes<HTMLImageElement>;
declare const _default: React.NamedExoticComponent<IProxyItem>;

declare const StarportScope: FC<{
    children: ReactNode;
}>;

export { _default$1 as ProxyContainer, _default as ProxyItem, StarportScope };
