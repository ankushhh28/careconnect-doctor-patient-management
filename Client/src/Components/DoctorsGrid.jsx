import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";

const DoctorsGrid = () => {
  // --------------------------------------------
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  // --------------------------------------------

  return (
    <div className="flex flex-col gap-8  justify-center items-center  px-6 sm:px-12 md:px-20 lg:px-24 py-10">
      {/* ---------------------- HEADING ---------------------- */}
      <h1 className="text-3xl sm:text-5xl  text-gray-800 font-bold">
        Trusted Doctors for{" "}
        <span className="text-blue-600 decoration-blue-600">
          You!
        </span>
      </h1>

      {/* ----------------- DESCRIPTION ----------------------- */}
      <p className="text-lg  max-w-3xl text-center text-gray-700">
        Browse and book appointments with top-rated doctors across various
        specialties. Get the right medical care from trusted professionals,
        anytime you need
      </p>

      {/*  ------------------- DOCTORS GRID -------------------- */}
      <div className="w-full grid grid-cols-auto gap-4 gap-y-6 px-4 sm:px-2 py-4 sm:py-2 ">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="w-fit border border-blue-300 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500"
            key={index}
          >
            <img
              src={item.image}
              className="bg-gradient-to-r from-blue-200  via-blue-100 to-blue-200"
              alt="doctor"
            />
            <div className="px-6 py-2">
              <div className="flex items-center gap-2 text-green-600">
                <p className="w-2 h-2 rounded-full bg-green-500 "></p>Available
              </div>
              <p className="text-gray-900 font-medium text-lg">{item.name}</p>
              <p className="text-gray-600 font-medium text-sm">
                {item.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------- BUTTON -------------------------- */}
      <Button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        variant="contained"
        className="flex justify-center items-center gap-2 px-3 sm:px-4 py-2 w-2/5 sm:w-fit text-lg font-medium  rounded-lg shadow-md bg-blue-500 hover:opacity-95 hover:scale-95 transition-all duration-300 text-nowrap normal-case"
      >
        View more
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default DoctorsGrid;
