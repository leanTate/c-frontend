import React,{useState} from 'react'
import { useAuthContext } from '../auth/context/AuthContex';
import { CSSTransition } from "react-transition-group"
import ClockIcon from '../assets/imgs/clock.svg'
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const[activeMenu]=useState('main');
  const {dropdown,setDropdown,user} = useAuthContext();
  const Navigate = useNavigate();
  function DropdownItem({leftIcon,children,rightIcon,nav}){
    return(
      <button onClick={()=>{
        Navigate(nav);
        setDropdown(false);
      }} className='menu-item'>
        <span className='icon-button'><img width="16px" src={leftIcon} alt="ashe"/></span>
        <span style={{paddingLeft:'10px'}}>{children}</span>
        <span className='icon-right'>{rightIcon}</span>
      </button>
    )
  }
  return (
    <div className={dropdown === false ?'dropdown' : 'dropdown-open'}>
      <CSSTransition in={activeMenu==='main'} timeout={500} classNames='menu-primary' unmountOnExit>
        <div className='menu'>
          <span>Welcome {user}!</span>
          <DropdownItem leftIcon={ClockIcon} nav="/history">history</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu;
