import React, {useState} from 'react'
import globalContext from './GlobalContext'

const GlobalState = (props) =>{

  const [user,setUser]=useState('');
  const [dropDown,setDropdown]=useState(false);

  return(
    <globalContext.Provider value={{
      userName:user,
      setUser,
      dropdown:dropDown,
      setDropdown
    }
    }>
      {props.children}
    </globalContext.Provider>
  )
}

export default GlobalState;
