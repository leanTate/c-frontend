import React,{useMemo,useState,useEffect} from 'react'
import HistoryCard from '../components/HistoryCard';
import {Loader} from "../components/loader";

function History() {
  const [data,setData]=useState([])
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    fetch('https://uai-proyect.herokuapp.com/Purchase', {
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
      setloading(false)
      return(
        <HistoryCard key={data.id} employee={data.employee} products={data.products} purchaseDate={data.purchaseDate} totalcost={data.totalCost} parcialCost={data.parcialCost} quantity={data.quantity} cost={data.cost} />
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
    return (
      
      <div className='historyPage'>
        {Purchase}
      </div>
    )
  }
}

export default History
