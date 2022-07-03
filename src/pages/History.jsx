import React,{useMemo,useState,useEffect} from 'react'
import HistoryCard from '../components/HistoryCard';

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
        <HistoryCard employee={data.employee} products={data.products} purchaseDate={data.purchaseDate} cost={data.cost} />
      )
    })
  },[data])
  return (
    <section className='historyPage'>
      {Purchase}
    </section>
  )
}

export default History
