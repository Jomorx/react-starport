import React, { memo, useMemo, useState } from "react";
import ProxyItem from "starport/components/ProxyItem";
import { imageArr } from "../coomposables/data";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [counter, setCounter] = useState(100);
  const style = useMemo(() => {
    return {
      width: `${counter}px`,
      height: `${counter}px`,
      borderRadius: "50%",
      flexShrink: 0,
    };
  }, [counter]);
  const navigate = useNavigate();
  const { id } = useParams();
  const enLarge = () => {
    setCounter(counter + 100);
  };
  return (
    <>
      <button onClick={enLarge}>enLarge</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProxyItem
          style={style}
          onClick={(e) => {
            navigate(`/home/${id}`);
          }}
          src={imageArr[id!]}
          port={id}
          key={id}
        />
        react起源于Facebook的内部项目，在13年5月开源。react不是一个完整的MVC框架，最多可以认为是MVC中的V（view），react并不认可MVC开发模式。可以理解为，react将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了页面。
      </div>
    </>
  );
};

export default memo(Home);
