import React, {useState} from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

//62ae6af1f46e0a11e21dfa4a
const ShopCard=({name,price,description,image,id,stocked,category})=>{
  const Navigate  =useNavigate()
  const [formData, setFormData] = useState({
    newstock: 0
  })

  const handleFormData = (e)=>{
      const {name, value} = e.target
      setFormData(prevFormData=> ({
        ...prevFormData,
        [name]: value
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {newstock} = formData
    let stock = stocked - newstock; 
    const update = {name,price,description,image,category,stock};
    console.log(update);
    fetch(`http://localhost:5205/Product/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    }).then(Response=>{
      // console.log(Response.status);
      if(Response.ok === true){
        toast.success('buy Successful')
        Navigate('/dashboard')
      }else{
        toast.error('buy Failed')
      }
    })
  }
  return (
    <div className='ShopCard'>
      <h1>{name}</h1>
      <img className='HeroShopCard' src={image} alt="cardHero"/>
      <h2>${price}</h2>
      <p>{description}</p>
      <div className='buttons-container'>
        <form onSubmit={handleSubmit}>
          <button className='ShopButton'>Shop</button>
          <input className='ShopInput' type="number" min="1" max={stocked} name="newstock" value={formData.newstock} onChange={handleFormData}  placeholder="1" />
        </form>
      </div>
    </div>
  )
}

export default ShopCard;
