import React, { createContext, memo, useContext, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const StarportContext = createContext({});

const defaultStyle = {
    position: "fixed",
    transition: "all 0.5s linear",
};
const timer = new Map();
const ProxyContainer = (props) => {
    const { RenderSlot, port } = props;
    const { metaData, proxyElArr, setLandedMap } = useContext(StarportContext);
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
        }
        else {
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
    return (React.createElement("div", { style: divStyle }, metaData[port] &&
        (landed && proxyElArr[port]?.el ? (createPortal(React.createElement(RenderSlot, { style: style, ...attrs }), proxyElArr[port].el)) : (React.createElement(RenderSlot, { style: style, ...attrs })))));
};
var ProxyContainer$1 = memo(ProxyContainer);

const resolvedPromise = (fn) => Promise.resolve().then(fn);

const proxyItem = (props) => {
    const el = useRef(null);
    const { setMetaData, setProxyElArr, landedMap } = useContext(StarportContext);
    const { style, port, ...attrs } = props;
    const update = async () => {
        setMetaData((prev) => ({ ...prev, [port]: { style, ...attrs } }));
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
    return (React.createElement("div", { ref: el, style: { ...style, transition: "all 0.5s linear" } }));
};
var ProxyItem = memo(proxyItem);

const StarportScope = ({ children }) => {
    // 
    const [metaData, setMetaData] = useState({});
    const [proxyElArr, setProxyElArr] = useState({});
    const [landedMap, setLandedMap] = React.useState({});
    const stateMap = new Map();
    return (React.createElement(StarportContext.Provider, { value: {
            metaData,
            setMetaData,
            proxyElArr,
            setProxyElArr,
            landedMap,
            setLandedMap,
            stateMap
        } }, children));
};

export { ProxyContainer$1 as ProxyContainer, ProxyItem, StarportScope };
