import React from "react";
import Router from "./router";
import {useNavigate} from "react-router-dom"
import ProxyContainer from "../packages/StarPort/components/ProxyContainer";
import TheImage from "./components/TheImage";
import { imageArr } from "./coomposables/data";
const App = () => {
  const navigate = useNavigate()
  const handleClick = (path:string)=>navigate(path)
  return (
    <>
      <button onClick={()=>{handleClick("list")}}>list</button>
      <button onClick={()=>{handleClick("info")}}>info</button>
      <button onClick={()=>{handleClick("none")}}>none</button>

      <Router />
      {
        imageArr.map((item,index)=><ProxyContainer RenderSlot={TheImage} port={index} key={index}/>)
      }
    </>
  );
};

export default App;
