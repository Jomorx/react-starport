import React, { memo, useEffect, useMemo, useState } from "react";
import { ProxyItem } from "react-starport-comp";
import { imageArr } from "../coomposables/data";
import { useNavigate, useParams } from "react-router-dom";
const stateMap = new Map();
const Detail = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(stateMap.get(id));
  const style = useMemo(() => {
    return {
      width: `${counter}px`,
      height: `${counter}px`,
      borderRadius: "50%",
      flexShrink: 0,
      transition: "all 0.5s linear",
      overflow:"hidden"
    };
  }, [counter]);
  const navigate = useNavigate();
  const enLarge = () => {
    setCounter((prev) => prev + 100);
    stateMap.set(id, stateMap.get(id) + 100);
  };
  const reset = () => {
    setCounter(100);
    stateMap.set(id, 100);
  };
  useEffect(() => {
    if (!stateMap.get(id)) {
      stateMap.set(id, 100);
      setCounter(100);
    }
  }, [id]);
  return (
    <>
      <br />
      <button onClick={enLarge}>enLarge</button>
      <button onClick={reset}>reset</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProxyItem
          renderProps={{
            style,
            onClick: (e) => {
              navigate(`/home/${id}`);
            },
          }}
          port={id!}
          key={id}
        />
        react起源于Facebook的内部项目，在13年5月开源。react不是一个完整的MVC框架，最多可以认为是MVC中的V（view），react并不认可MVC开发模式。可以理解为，react将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了页面。
      </div>
    </>
  );
};

export default memo(Detail);
