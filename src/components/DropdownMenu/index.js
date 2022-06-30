import React from 'react'
import { useState } from 'react';
import { CSSTransition } from "react-transition-group"
import ShopIcon from './../../assets/imgs/cart.svg'
import { useNavigate } from 'react-router-dom';
import { useTransition } from 'react';

function DropdownMenu({open}) {
  const[activeMenu,setActiveMenu]=useState('main');
  const Navigate = useNavigate();
  function DropdownItem({leftIcon,children,rightIcon,nav}){
    return(
      <a  href onClick={()=>Navigate(nav)} className='menu-item'>
        <span className='icon-button'><img width="16px" src={leftIcon} alt="ashe"/></span>
        <span style={{paddingLeft:'10px'}}>{children}</span>
        <span className='icon-right'>{rightIcon}</span>
      </a>
    )
  }
  return (
    <div className={open === false ?'dropdown' : 'dropdown-open'}>
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
