import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import ShopCard from '../../components/ShopCard'

const Product=()=>{
  const params = useParams()
  const[product,setProduct]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5205/Product/${params.id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>setProduct(dato))
  });
  return (
    <div>
      <Navbar />
      <div className='Product-container'>
      <ShopCard name={product.name} price={product.price} description={product.description} image={product.image} id={product.id} stock={product.stock} />
      </div>
    </div>
  )
}

export default Product
