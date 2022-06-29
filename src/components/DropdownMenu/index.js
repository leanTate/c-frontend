import React from 'react'
import { useState } from 'react';
import { CSSTransition } from "react-transition-group"

function DropdownMenu({open}) {
  const[activeMenu,setActiveMenu]=useState('main');

  function DropDownItem({link,icon}){
    <li className='drop-item'>
      <a href={link} className="icon-button">
        {icon}
      </a>
    </li>
  }

  function DropdownItem(props){
    return(
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        <span style={{paddingLeft:'10px'}}>{props.children}</span>
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className={open === true ?'dropdown-open' : 'dropdown'}>
      <CSSTransition in={activeMenu==='main'} timeout={500} classNames='menu-primary' unmountOnExit>
        <div className='menu'>
          <DropdownItem leftIcon={<DropDownItem icon=""/>}>hola</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu;
