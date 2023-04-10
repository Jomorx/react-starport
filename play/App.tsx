import React from "react";
import Router from "./router";
import {useNavigate} from "react-router-dom"
import ProxyContainer from "starport/components/ProxyContainer";
import TheImage from "./components/TheImage";
const App = () => {
  const navigate = useNavigate()
  const handleClick = (path:string)=>navigate(path)
  return (
    <>
      <button onClick={()=>{handleClick("/")}}>home</button>
      <button onClick={()=>{handleClick("/info")}}>info</button>
      <button onClick={()=>{handleClick("/list")}}>list</button>
      <Router />
      <ProxyContainer RenderSlot={TheImage} />
    </>
  );
};

export default App;
