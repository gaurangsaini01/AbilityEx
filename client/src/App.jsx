import {React,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  const[loginStatus,setLoginStatus] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('AbilityExtoken');
    if (token) {
      setLoginStatus(true);
    }
  }, []);
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard setLoginStatus={setLoginStatus} loginStatus={loginStatus}/>} />
      <Route path="/" element={<LoginPage loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>} />
      <Route path="/signup" element={<SignupPage setLoginStatus={setLoginStatus} loginStatus={loginStatus} />} />
    </Routes>
  );
}

export default App;
