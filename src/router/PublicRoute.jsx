import { useAuthContext } from "../auth/context/AuthContex";
import { Navigate } from "react-router-dom";

export const PublicRoute=({children})=>{
  const {logged} = useAuthContext();

  return(logged)
  ?<Navigate to='/dashboard' />
  :children
}