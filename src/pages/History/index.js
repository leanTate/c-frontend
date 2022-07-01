import React,{useMemo,useState,useEffect} from 'react'

function History() {
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5205/Purchase', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setData(dato))
  },[]);
  useEffect(()=>{
    console.log(data);
  },[data])
  const Purchase = useMemo(()=>{
    return data.map((data)=>{
      return(
        data.products
      )
    })
  },[data])
  return (
    <div>
      {Purchase}
    </div>
  )
}

export default History
