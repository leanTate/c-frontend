import React,{useState,useEffect, useMemo} from "react";

const Dashboard =() =>{
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5205/login', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setData(dato))
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data])

  const renderUsers=useMemo(()=>{
    return data.map((dato)=>{
      return(
        <div style={{display:"flex"}}>
          <h1>{dato.name}</h1>
          <h2>{dato.password}</h2>
        </div>
      )
    })
  },[data])
  return(
    <div>
      { {renderUsers} }
    </div>
  )
}