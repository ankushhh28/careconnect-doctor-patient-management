import React from "react";
import { images } from "../assets/assets";
import { Button, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  justify-center items-center gap-4  bg-blue-50   min-h-screen">
      <img
        src={images.logo}
        alt="logo"
        className="w-36 sm:w-40  "
        onClick={() => navigate("/")}
      />
      <h1 className="text-gray-700 font-semibold text-xl sm:text-2xl tracking-wide">
        Sign in to Careconnect
      </h1>
      <div className=" w-[70%] sm:w-[50%] md:w-[40%] lg:w-[32%] xl:w-[28%] border border-blue-300 shadow-lg px-3 md:px-5 md:py-10 py-7 rounded-2xl">
        <form action="" className="flex flex-col   px-4 py-3">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Enter email"
          />
          <NavLink
            to={"/forgot-password"}
            className={
              "text-blue-700 hover:underline underline-offset-2 decoration-blue-600 text-end my-1"
            }
          >
            Forgot Password?
          </NavLink>{" "}
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="mt-3 mb-8"
            placeholder="Enter password"
          />
          <Button
            variant="contained"
            className="bg-blue-500 rounded-full normal-case"
          >
            Sign in
          </Button>
        </form>
        <p className="px-4 sm:px-6 py-2 ">
          New to Careconnect?{" "}
          <NavLink
            to={"/register"}
            className={
              "text-blue-700 hover:underline underline-offset-2  decoration-blue-600"
            }
          >
            Create Account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
