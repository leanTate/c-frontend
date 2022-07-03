import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
import icon from '../assets/imgs/1.svg'
import userIcon from '../assets/imgs/user.svg'
import DropdownMenu from "./DropdownMenu"
import { useAuthContext } from "../auth/context/AuthContex"

function Navbar({logged}) {

    const Navigate = useNavigate()
    const [navbar,setNavbar] = useState(false);
    const {dropdown,setDropdown,logout} = useAuthContext();

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
                        <button className='navbarButton-user'  onClick={()=>setDropdown(!dropdown)}><img src={userIcon} style={{width:'25px',height:'25px'}} alt='icon'/></button>
                        <DropdownMenu open={dropdown}/>
                    </div>
                    <div>
                        <button className='navbarButton' onClick={()=>{
                            logout()
                            Navigate('/')
                            }}>
                                LogOut
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar