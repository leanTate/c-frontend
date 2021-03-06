import React, {useState} from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { mail,AddHistory,today,estimateday} from '../func/Functions';
import { useAuthContext } from '../auth/context/AuthContex';
import { Loadertwo } from './loader';
//62ae6af1f46e0a11e21dfa4a
const ShopCard=({name,price,description,image,id,stocked,category,provider,purchased})=>{
  const [loading,setLoading]=useState(false)
  const Navigate  =useNavigate();
  const {user}=useAuthContext();
  const [formData, setFormData] = useState({
    newstock: null,
  });

  const handleFormData = (e)=>{
      const {name, value} = e.target
      setFormData(prevFormData=> ({
        ...prevFormData,
        [name]: value
      }))
  }
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    const {newstock} = formData
    const estimate = estimateday();
    let stock = stocked - newstock;
    let purchases = purchased + parseInt(newstock);
    const update = {name,price,description,image,category,stock,provider,purchases};
    fetch(`https://uai-proyect.herokuapp.com/Product/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update)
    }).then(Response=>{
      // console.log(Response.status);
      setLoading(false)
      if(Response.ok === true){
        toast.success(`buy Successful 💰`)
        Navigate('/dashboard')
        if(stock ===0){
          const message = {
            message:`hola, ${provider} necesitamos un stock de 500 unidades de ${name}`,
            subject:`Necesitamos Stock ${name} esta agotado`,
          };
          mail(message);
        }
        const message2 = {
          message:`hola, gracias por su compra de ${newstock} unidades de nuestro producto ${name}, llega el ${estimate}`,
          subject:`Gracias por comprar ${name} !!!`,
        }
        mail(message2);
        const Purchase={
          employee: user,
          products: name,
          purchaseDate:today(),
          cost: price,
          estimateDate: estimate,
          quantity: newstock,
          parcialCost: newstock*price,
          totalCost: newstock*price,
        }
        AddHistory(Purchase);
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
          <div className='skeleton'>
            <div></div>
          </div>
        <br />
        <div className='buttons-container'>
          {
          loading?<Loadertwo />:
          <form onSubmit={handleSubmit}>
            <button className='ShopButton' disabled={formData.newstock>stocked && formData.newstock===0 && formData.newstock ===null}>Purchase</button>
            <input required className='ShopInput' type="number" min="1" max={stocked} name="newstock" value={formData.newstock} onChange={handleFormData}  placeholder={`current stock: ${stocked}`} />
          </form>
          }
        </div>
      </div>
    )
}

export default ShopCard;
