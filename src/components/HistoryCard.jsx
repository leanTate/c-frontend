import React from 'react'

const HistoryCard=({employee,products,purchaseDate,cost,parcialCost,quantity,totalcost})=>{
  return (
    <div className='historyCard'>
      <div>
        <h1>empleado: {employee}</h1>
      </div>
      <div>
        <ul style={{margin:'none'}}>
            <li>product:{products}</li>
            <li>quantity: {quantity}</li>
            <li>cost: {cost}</li>
            <li><span>Purchase date: {purchaseDate}</span></li>
            <li><span style={{margin:'none'}}> Parcial Cost: {parcialCost}</span></li>
        </ul>
          <h3 style={{margin:'none'}}>Total Cost: {totalcost}</h3>
        <br/>
      </div>
    </div>
  )
}

export default HistoryCard