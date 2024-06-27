import React, { useEffect } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      toast.error('Signup First')
      navigate("/signup")
    }
  })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard