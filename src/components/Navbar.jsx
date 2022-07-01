import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
import icon from '../assets/imgs/1.svg'
import userIcon from '../assets/imgs/user.svg'
import DropdownMenu from "./DropdownMenu"

function Navbar({logged}) {

    const Navigate = useNavigate()
    const [navbar,setNavbar] = useState(false);
    const [open,setOpen]=useState(false);

    const changeBackground = () =>{
        if(window.scrollY>=10){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
    <div>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <img src={icon} style={{width:'100px',height:'60px',paddingRight:'10px',paddingTop:'5px'}} alt='icon' onClick={()=>Navigate("/dashboard")} />
                </div>
                <div className='link-bar'>
                    <div>
                        <button className='navbarButton-user'  onClick={()=>setOpen(!open)}><img src={userIcon} style={{width:'25px',height:'25px'}} alt='icon'/></button>
                        <DropdownMenu open={open}/>
                    </div>
                    <div>
                        <button className='navbarButton' onClick={()=>Navigate('/')}>LogOut</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar