import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard=({name,price,description,image,id})=>{
  const Navigate = useNavigate();
    return (
      <div className='ProductCard' onClick={()=>Navigate(`/products/${id}`)}>
          <img className='HeroImg' src={image} alt="cardHero"/>
          <h1>{name}</h1>
          <h2>${price}</h2>
          <p>{description}</p>
      </div>
    )
}

export default ProductCard;
