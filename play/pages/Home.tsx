import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProxyItem from "starport/components/ProxyItem";
import { imageArr } from "../coomposables/data";

const Home = () => {
  const { id } = useParams();
    const navigate = useNavigate()
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <ProxyItem onClick={
        ()=>{navigate(`/detail/${id}`)}
      } src={imageArr[id!]} port={id} key={id} style={{"width":"500px",height:"150px"}}></ProxyItem>
    </div>
  );
};

export default Home;
