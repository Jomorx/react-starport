import React, { useMemo, useState } from "react";
import { ProxyItem } from "../../packages/StarPort/dist/index.es";

const List = () => {
  const style = useMemo(
    () => ({ width: "100px", height: "100px", margin: "0 20px 20px 20px" }),
    []
  );
  const [listA, setListA] = useState<string[]>(["0", "1", "2"]);
  const [listB, setListB] = useState<string[]>(["3", "4", "5"]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {listA.map((item) => (
            <ProxyItem
              port={item}
              key={item}
              renderProps={{
                style,
                onClick: () => {
                  setListB(listB.filter((i) => i !== item));
                  setListA([...listA, item]);
                },
              }}
            />
          ))}
        </div>
        <div>
          {listB.map((item) => (
            <ProxyItem
              renderProps={{
                style,
                onClick: () => {
                  setListB(listB.filter((i) => i !== item));
                  setListA([...listA, item]);
                },
              }}
              port={item}
              key={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
