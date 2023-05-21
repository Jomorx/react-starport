import React, { useMemo } from "react";
import { ProxyItem } from "react-starport-comp";

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
        renderProps={{
            onClick: (e) => {
              navigate(`/detail/${index}`);
            },
            style,
            src,
          }}
          port={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default Info;
