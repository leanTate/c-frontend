import React,{useContext,useState} from 'react'
import GlobalContext from '../context/GlobalContext';
import { CSSTransition } from "react-transition-group"
import ShopIcon from '../assets/imgs/cart.svg'
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const[activeMenu]=useState('main');
  const {dropdown,setDropdown} = useContext(GlobalContext);
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
          <DropdownItem leftIcon={ShopIcon} nav="/cart">Cart</DropdownItem>
          <DropdownItem leftIcon={ShopIcon} nav="/history">history</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu;
