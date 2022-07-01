import React, {useMemo} from 'react'

const HistoryCard=({employee,products,purchaseDate,cost})=>{
  return (
    <div className='historyCard'>
      <div>
        <h1>empleado: {employee}</h1>
      </div>
      <div>
        <ul style={{margin:'none'}}>
            <li>{products}</li>
          <span>Date: {purchaseDate}</span>
        </ul>
          <h3 style={{margin:'none'}}>Cost: {cost}</h3>
        <br/>
      </div>
    </div>
  )
}

export default HistoryCard