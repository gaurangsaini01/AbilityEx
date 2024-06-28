import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Navbar({ setLoginStatus, user }) {
  const navigate = useNavigate();
  function handlelogout() {
    setLoginStatus(false);
    localStorage.removeItem("AbilityExtoken");
    localStorage.removeItem("AbilityExuser");
    navigate("/");
  }
  return (
    <div className="flex justify-between py-2 bg-gray-100 mb-8">
      <div className=" text-3xl font-bold text-black">My Dashboard</div>
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <div className="h-[25px] w-[25px] overflow-hidden rounded-full cursor-pointer">
            <img
              src="https://e7.pngegg.com/pngimages/836/833/png-clipart-round-orange-white-and-green-flag-of-indian-art-flag-of-india-computer-icons-national-flag-indian-flag-blue-flag-thumbnail.png"
              className="w-full h-full object-cover "
            />
          </div>
          <IoMdArrowDropdown size={25} className="cursor-pointer" />
        </div>
        <FaRegBell size={20} className="text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-2 group relative">
          <div className="h-[30px] w-[30px] overflow-hidden rounded-full cursor-pointer">
            <img src={user?.image} className="w-full h-full object-cover " />
          </div>
          <div className="capitalize font-semibold flex cursor-pointer">
            Hi, {user?.firstName}
            <RiArrowDropDownLine size={25} />
          </div>
          <div
            className="invisible absolute left-[50%]
                      translate-x-[-55%] translate-y-[45%]
                   top-[50%]
                  flex flex-col rounded-lg bg-black text-white p-4 text-richblack-5
                  opacity-0 transition-all duration-200 group-hover:visible
                  group-hover:opacity-100 lg:w-[150px] z-20"
          >
            <div
              className="absolute left-[50%] top-0
                  translate-x-[80%]
                  translate-y-[-15%] h-6 w-6 rotate-45 rounded bg-black z-20"
            ></div>
            <button
              onClick={handlelogout}
              className="text-sm font-semibold hover:text-blue-300 transition-all duration-200 ease-out"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
