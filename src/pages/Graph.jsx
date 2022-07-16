import React, {useState,useEffect} from 'react'
import Chart from '../components/Chart'
const Graph = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://uai-proyect.herokuapp.com/Product', {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setData(dato))
  },[]);
  let names = data.map((data)=> data.name)
  let purchases = data.map((data)=> data.purchases)
  return (
    <div className='graph-container'>
      <div style={{width:'650px'}}>
        <Chart labels={names} datas={purchases} />
      </div>
    </div>
  )
}

export default Graph
