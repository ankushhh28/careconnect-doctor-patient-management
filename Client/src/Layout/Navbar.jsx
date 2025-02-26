import React, { useState } from "react";
import { images } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import { FaUserDoctor } from "react-icons/fa6";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Avatar } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  // ---------------------- USE STATES ------------------------------------
  const [menuButton, setMenuButton] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className=" flex justify-between items-center w-full  px-3 sm:px-6 py-4 bg-blue-100 shadow-md">
        {/* ---------------------------- Logo Section ---------------- */}
        <div className="w-32 md:w-36">
          <img src={images.logo} alt="logo" />
        </div>

        {/*-------------------- Navigation Links -----------------------------*/}
        <nav className="hidden md:flex md:space-x-7 lg:space-x-10 text-lg font-medium text-gray-700">
          <NavLink to={"/"} className="hover:text-black transition">
            Home
          </NavLink>
          <NavLink to={"/doctors"} className="hover:text-black transition">
            Our Doctors
          </NavLink>
          <NavLink to={"/about"} className="hover:text-black transition">
            About
          </NavLink>
          <NavLink to={"/contact"} className="hover:text-black transition">
            Contact Us
          </NavLink>
        </nav>

        {/* ---------------------- Check Login Status --------------------- */}
        {token ? (
          <div className="flex items-center   group relative">
            {/* ----------------------- Profile Icon -------------------- */}
            <Avatar src="/broken-image.jpg" />
            <RiArrowDropDownLine className="text-4xl" />
            {/* -------------------- Profile Menu -------------------------- */}
            <div className="absolute top-0 -right-5 pt-14 text-base font-medium z-20 hidden group-hover:block ">
              <ul className="flex flex-col  gap-2 w-fit bg-blue-50 px-5 py-3 ">
                <NavLink
                  to={"/my-profile"}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition flex items-center gap-2 text-nowrap"
                >
                  <IoPerson className="text-xl" />
                  Profile
                </NavLink>
                <NavLink
                  to={"/my-appointments"}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition flex items-center gap-2 text-nowrap"
                >
                  <FaHistory className="text-xl" />
                  My Appointments
                </NavLink>
                <NavLink
                  to={"/"}
                  onClick={() => setToken(false)}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer transition flex items-center gap-2 text-nowrap"
                >
                  <IoLogOut className="text-xl" />
                  Logout
                </NavLink>
              </ul>
            </div>
            {/* -------------------------------------------------------- */}
          </div>
        ) : (
          // ------------------------ SignIn & Register ----------------------

          <div className="hidden md:flex gap-5">
            <Button
              className="px-5 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600  transition"
              onClick={() => navigate("/login")}
            >
              Sign in
            </Button>
            <Button
              className="px-5 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600  transition"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </div>
        )}

        <TbMenuDeep
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuButton(true)}
        />
      </div>

      {/* ---------------------- MOBILE MENU ------------------------ */}
      {menuButton && (
        <div className=" md:hidden fixed z-10 w-[100%] right-0 top-0 bottom-0 overflow-hidden bg-blue-50 ease-in-out  transition-all px-6 py-6">
          <div className="flex justify-end cursor-pointer">
            <RxCross2
              className=" text-3xl text-gray-800"
              onClick={() => setMenuButton(false)}
            />
          </div>
          <ul className="flex flex-col items-start px-16  gap-4 py-3">
            <NavLink
              onClick={() => setMenuButton(false)}
              to={"/"}
              className="px-2 font-semibold  rounded-full flex items-center"
            >
              <span className="mr-3">
                <HomeIcon />
              </span>
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenuButton(false)}
              to={"/doctors"}
              className="px-2 font-semibold  rounded-full flex items-center"
            >
              <span className="mr-3">
                <FaUserDoctor className="text-xl" />
              </span>
              Our Doctors
            </NavLink>
            <NavLink
              onClick={() => setMenuButton(false)}
              to={"/about"}
              className="px-2 font-semibold  rounded-full flex items-center"
            >
              <span className="mr-3">
                <InfoIcon />
              </span>
              About
            </NavLink>
            <NavLink
              onClick={() => setMenuButton(false)}
              to={"/contact"}
              className="px-2 font-semibold  rounded-full flex items-center"
            >
              <span className="mr-3">
                <ContactsIcon />
              </span>
              Contact Us
            </NavLink>
          </ul>

          <div className="flex flex-col w-fit  sm:w-[32%] mt-4 mx-8 gap-3">
            <Button
              className="px-5 py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800  transition normal-case flex items-center justify-center"
              onClick={() => navigate("/login")}
            >
              <span className="mr-3">
                <VpnKeyIcon />
              </span>
              Sign in
            </Button>
            <Button
              className="px-12 py-2 sm:px-5 sm:py-2 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800  transition normal-case flex items-center justify-center"
              onClick={() => navigate("/register")}
            >
              <span className="mr-3">
                <HowToRegIcon />
              </span>
              Register
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
