import React, { useEffect } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
function Dashboard({loginStatus}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(loginStatus===false){
      navigate('/')
    }
  },[])
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Dashboard