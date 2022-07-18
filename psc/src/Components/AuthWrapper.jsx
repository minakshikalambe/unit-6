import React from "react";
import { useSelector } from "react-redux";
import {Navigate, useLocation} from "react-router-dom"
const AuthWrapper=({children})=>{
    const authState=useSelector((store)=>store.authReducer.auth);
    const location=useLocation()
    // const navigate=useNavigate();
    // useEffect(()=>{
    //     if(!authState){
    //         navigate('/login',{state:'/cart'})
     
    //      }
    // },[authState,navigate])
   if(authState){
       return children
   }
    return<Navigate to="/login" state={location}replace={true}/>
}
export default AuthWrapper