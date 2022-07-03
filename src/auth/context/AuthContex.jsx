import { createContext, useContext, useEffect, useReducer,useState } from "react";
import { types } from "../types/types";
import { authReducer } from "./authReducer";

const AuthContext = createContext();

const init = () =>{
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      return{
        logged: !!user,
        user
      }
    }catch{
      console.log('Not user logged');
    }
}

const initialState = {
  logged: false
}

export const AuthProvider = ({children}) => {
  const [auth, dispatch] = useReducer(authReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(auth.user));
  },[auth])

  const login =(name = '')=>{
    const action = {
      type: types.login,
      payload: name
    }
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user')
    const action = {
        type: types.logout,

    }
    dispatch(action)
}
  const [dropDown,setDropdown]=useState(false);
return (
  <AuthContext.Provider value={{
      ...auth,
      login,
      logout,
      dropdown:dropDown,
      setDropdown,
      user:auth.user
      }}>
      {children}
  </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)