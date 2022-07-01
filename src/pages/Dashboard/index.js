import React,{useState,useEffect} from "react";
import ProductCard from "../../components/ProductCard";
import { useMemo } from "react";

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
  const products = useMemo(()=>{
    return data.map((data)=>{
      return(
        <ProductCard key={data.id} name={data.name} price={data.price} description={data.description} image={data.image} id={data.id} />
      )
    })
  },[data])
  return(
    <div>
      <div className="DashBoard">
        {products}
      </div>
    </div>
  )
}

export default Dashboard;