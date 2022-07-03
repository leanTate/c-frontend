import React,{useState,useEffect} from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/loader";
import { useMemo } from "react";

const Dashboard =() =>{
  const [data,setData]=useState([])
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    fetch('https://uai-proyect.herokuapp.com/Product', {
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
    let newdata =data.filter(data => data.stock > 0)
    return newdata.map((data)=>{
      setloading(false)
      return(
        <ProductCard key={data.id} name={data.name} price={data.price} description={data.description} image={data.image} id={data.id} />
      )
    })
  },[data])
  if (loading){
    return(
      <div>
        <Loader />
      </div>
    )
  }else{
    return(
      <div>
        <div className="DashBoard">
          {products}
        </div>
      </div>
    )
  }
}

export default Dashboard;