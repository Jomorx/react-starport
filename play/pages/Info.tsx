import React, { useMemo } from "react";
import {ProxyItem} from "../../packages/StarPort/dist/index.es";

import { imageArr } from "../coomposables/data";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const style = useMemo(() => {
    return { width: "100px", height: "100px", borderRadius: "50%" };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {imageArr.map((src, index) => (
        <ProxyItem
          onClick={(e) => {
            navigate(`/detail/${index}`);
          }}
          style={style}
          src={src}
          port={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default Info;
