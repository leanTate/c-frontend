import React,{useState,useEffect} from "react";
import ProductCard from "../../components/ProuctCard";

const Dashboard =() =>{
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5205/Product', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setData(dato))
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data])

  return(
    <div className="DashBoard">
      {data.map((data)=>{
      return(
        <ProductCard name={data.name} price={data.price} description={data.description} image={data.image} />
      )
    })}
    </div>
  )
}

export default Dashboard;