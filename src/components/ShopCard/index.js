import React from 'react'
import toast from 'react-hot-toast';



const ShopCard=({name,price,description,image,id,stock})=>{
  return (
    <div className='ShopCard'>
      <h1>{name}</h1>
      <img className='HeroShopCard' src={image} alt="cardHero"/>
      <h2>${price}</h2>
      <p>{description}</p>
      <div className='buttons-container'>
        <button className='ShopButton'>Shop</button>
        <input className='ShopInput' type="number" min="1" max={stock}  placeholder="1" />
      </div>
    </div>
  )
}

export default ShopCard;
