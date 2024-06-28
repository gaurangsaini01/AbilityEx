import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Section1 from "../Components/dashboard/Section1";
import Section2 from "../Components/dashboard/Section2";
import Section3 from "../Components/dashboard/Section3";
import Section4 from "../Components/dashboard/Section4";

function Dashboard({ loginStatus, setLoginStatus }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === false) {
      navigate("/");
    }
    setUser(JSON.parse(localStorage.getItem("AbilityExuser")));
  }, []);

  return (
    <div className="flex flex-col bg-gray-100 pb-10 ">
      <div className=" w-11/12 mx-auto ">
        <Navbar user={user} setLoginStatus={setLoginStatus} />
      </div>
      <div className="w-11/12 flex lg:flex-nowrap flex-wrap gap-6 mx-auto h-fit">
        <Section1 user={user} />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

export default Dashboard;
