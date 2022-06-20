import React from 'react'

const ProductCard=({name,price,description,image})=>{
  return (
    <div className='ProductCard'>
        <img src={image} alt="cardHero"/>
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
    </div>
  )
}

export default ProductCard;
