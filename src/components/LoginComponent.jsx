import Hero from '../assets/imgs/1.svg'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthContext } from '../auth/context/AuthContex';
import { Loadertwo } from './loader';

const LoginComponent =()=>{
  const [load,setLoad]=useState(false);
  const { login } = useAuthContext();
  const Navigate  =useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleFormData = (e)=>{
      const {name, value} = e.target
      setFormData(prevFormData=> ({
        ...prevFormData,
        [name]: value
      }))
  }

  const handleSubmit = (e) => {
    setLoad(!load)
    e.preventDefault();
    const {username,password} = formData
    const log = {username,password};
    fetch('https://uai-proyect.herokuapp.com/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    }).then(Response=>{
      // console.log(Response.status);
      if(Response.ok === true){
        setLoad(!load);
        login(username)
        toast.success('Login Successful')
        Navigate('/dashboard')
      }else{
        toast.error('Login Failed')
      }
    })
  }
  return(
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',paddingTop:'5%'}}>
      <div  className="Card">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div style={{display:'flex',justifyContent:'center',padding:'40px 0 100px 0'}}>
              <img src={Hero} alt="Hero" height="150px"/>
            </div>
            <div>
            <input className="from-Input" placeholder="User:" required name="username"  value={formData.username}  onChange={handleFormData}/>
            <input className="from-Input" type="password" placeholder="PassWord:" required name="password" value={formData.password}  onChange={handleFormData}/>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
              {load===false?<button className="form-button" id="btnsbtn">logIn</button> : <Loadertwo />}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginComponent;