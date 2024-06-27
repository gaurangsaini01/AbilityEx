import {React,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  const[loginStatus,setLoginStatus] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoginStatus(true)
    }
  }, []);
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard loginStatus={loginStatus}/>} />
      <Route path="/" element={<LoginPage setLoginStatus={setLoginStatus}/>} />
      <Route path="/signup" element={<SignupPage setLoginStatus={setLoginStatus} />} />
    </Routes>
  );
}

export default App;
