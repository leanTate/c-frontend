import Hero from '../../assets/imgs/1.svg'
import {useState} from 'react';
import toast from 'react-hot-toast';

const LoginComponent =()=>{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [response, setResponse] = useState();
  
  const handleFormData = (e)=>{
      const {name, value} = e.target
      setFormData(prevFormData=> ({
        ...prevFormData,
        [name]: value
      }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username,password} = formData
    const login = {username,password};
    fetch('http://localhost:5205/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login)
    }).then(Response=>{
      if(Response.ok == true){
        toast.success('Login Successful')
      }else{
        toast.error('Login Failed')
      }
    })
  }
  return(
    <div style={{display:'flex',justifyContent:'center',alignContent:'center',margin:'180px 0 0px 0'}}>
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
              <button className="form-button" id="btnsbtn">logIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LoginComponent;