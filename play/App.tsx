import React, { CSSProperties } from "react";
import Router from "./router";
import { useLocation, useNavigate } from "react-router-dom";
import { ProxyContainer } from "../packages/StarPort/dist/index";
import TheImage from "./components/TheImage";
import { imageArr } from "./coomposables/data";


const App = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => navigate(path);
  const location = useLocation();
  return (
    <>
      <button
        onClick={() => {
          handleClick("/list");
        }}
      >
        list
      </button>
      <button
        onClick={() => {
          handleClick("/info");
        }}
      >
        info
      </button>
      <button
        onClick={() => {
          handleClick("/none");
        }}
      >
        none
      </button>
      <br />
      {location.pathname}

      <Router />
      {imageArr.map((item, index) => (
        <ProxyContainer
          deActiveStyle={{
              top: 0,
              left: 0,
              transform: "scale(0)",
              pointerEvents: "none",
          }}
          duration={5000}
          RenderSlot={TheImage}
          port={index}
          key={index}
        />
      ))}
    </>
  );
};

export default App;
