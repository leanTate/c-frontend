import React, {useMemo} from 'react'

const HistoryCard=({employee,products,purchaseDate,cost,parcialCost,quantity})=>{
  return (
    <div className='historyCard'>
      <div>
        <h1>empleado: {employee}</h1>
      </div>
      <div>
        <ul style={{margin:'none'}}>
            <li>product:{products} quantity:{quantity}</li>
          <span>Purchase date: {purchaseDate}</span>
        </ul>
        <h3 style={{margin:'none'}}>Cost: {parcialCost}</h3>
          <h3 style={{margin:'none'}}>Cost: {cost}</h3>
        <br/>
      </div>
    </div>
  )
}

export default HistoryCard