import React, { Dispatch, FC, ReactNode, useState } from "react";
import { StarportContext } from "../context/StarportContext";
const StarportScope:FC<{children:ReactNode}> = ({ children }) => {
  // 
  const [metaData, setMetaData] = useState<Record<any,any>>({});
  const [proxyElArr, setProxyElArr] = useState<
    Record<string, { el: HTMLElement | null; isActive: boolean }>
  >({});
  const [landedMap, setLandedMap] = React.useState<
    Record<number, Dispatch<boolean>>
  >({});
  const stateMap = new Map()
  return (
    <StarportContext.Provider
      value={{
        metaData,
        setMetaData,
        proxyElArr,
        setProxyElArr,
        landedMap,
        setLandedMap,
        stateMap
      }}
    >
      {children}
    </StarportContext.Provider>
  );
};

export default StarportScope;
