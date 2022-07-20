import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import ShopCard from '../components/ShopCard'

const Product=()=>{
  const params = useParams()
  const [load,setload]=useState(true)
  const[product,setProduct]=useState([])
  useEffect(()=>{
    fetch(`https://uai-proyect.herokuapp.com/Product/${params.id}`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" }
    })
    .then((response)=>response.json())
    .then((dato)=>{
      setProduct(dato)
      setload(false)
    })
  },[params.id]);
  if(load){
    return (
      <div className='Product-container'>
      <div className='ShopCard'>
        <div className='skeleton' style={{height:'40px',width:'150px'}} />
        <div className='skeleton' style={{height:'200px',width:'200px'}} />
        <div className='skeleton' style={{width:'68.18px',height:'28px'}} />
        <div className='skeleton' style={{width:'136.15px',height:'19.2px'}} />
        <br />
        <div className='buttons-container'>
          <div style={{display:'flex',gap:'20px'}}>
            <div className='skeleton' style={{width:'80px',height:'44px'}} />
            <div className='skeleton' style={{width:'156px',height:'44px'}} />
          </div>
        </div>
      </div>
      </div>
    )
  }else{
    return (
      <div>
        <div className='Product-container'>
        <ShopCard name={product.name} price={product.price} description={product.description} image={product.image} id={product.id} stocked={product.stock} category={product.category} provider={product.provider} purchased={product.purchases} />
        </div>
      </div>
    )
  }
}

export default Product
