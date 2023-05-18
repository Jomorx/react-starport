'use strict';

var React = require('react');
var reactDom = require('react-dom');

const StarportContext = React.createContext({});

const defaultStyle = {
    position: "fixed",
    transition: "all 0.5s linear",
};
const timer = new Map();
const ProxyContainer = (props) => {
    const { RenderSlot, port } = props;
    const { metaData, proxyElArr, setLandedMap } = React.useContext(StarportContext);
    const { style, ...attrs } = metaData?.[port] ?? { style: {} };
    const [landed, setLanded] = React.useState(false);
    const [divStyle, setDivStyle] = React.useState({});
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
    React.useEffect(() => {
        update();
    }, [metaData, proxyElArr]);
    React.useEffect(() => {
        // 注册 setLanded函数
        setLandedMap((prev) => ({ ...prev, [port]: setLanded }));
    }, [port]);
    return (React.createElement("div", { style: divStyle }, metaData[port] &&
        (landed && proxyElArr[port]?.el ? (reactDom.createPortal(React.createElement(RenderSlot, { style: style, ...attrs }), proxyElArr[port].el)) : (React.createElement(RenderSlot, { style: style, ...attrs })))));
};
var ProxyContainer$1 = React.memo(ProxyContainer);

const resolvedPromise = (fn) => Promise.resolve().then(fn);

const proxyItem = (props) => {
    const el = React.useRef(null);
    const { setMetaData, setProxyElArr, landedMap } = React.useContext(StarportContext);
    const { style, port, ...attrs } = props;
    const update = async () => {
        setMetaData((prev) => ({ ...prev, [port]: { style, ...attrs } }));
    };
    React.useEffect(() => {
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
var ProxyItem = React.memo(proxyItem);

const StarportScope = ({ children }) => {
    // 
    const [metaData, setMetaData] = React.useState({});
    const [proxyElArr, setProxyElArr] = React.useState({});
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

exports.ProxyContainer = ProxyContainer$1;
exports.ProxyItem = ProxyItem;
exports.StarportScope = StarportScope;
