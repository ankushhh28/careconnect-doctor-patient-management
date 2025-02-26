import { Avatar, AvatarGroup, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate= useNavigate();
  return (
    <div className="flex flex-col md:flex-row  gap-10 sm:gap-14 md:gap-16  px-6 sm:px-12 md:px-20 lg:px-24 py-12 md:py-16 bg-gradient-to-br from-white via-blue-50 to-blue-200  w-full h-auto ">
      {/* ----------------- Left Section ----------------- */}
      <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 sm:mt-6 ">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-snug tracking-normal">
          Get Consult with our <span className="text-blue-600">Experts!</span>
        </h1>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl sm:max-w-xl md:w-full ">
          Connect with top medical professionals for personalized consultations.
          CareConnect ensures seamless appointments, expert guidance, and a
          hassle-free healthcare experience.
        </p>

        {/* ------------------- Buttons Section --------------------------- */}
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row md:flex-col md:items-start lg:flex-row lg:justify-start">
          <Button
            variant="outlined"
            color="primary"
            className="flex justify-center items-center gap-2 px-3 sm:px-4 py-2 w-4/5 sm:w-fit text-lg font-medium text-nowrap rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 "
          >
            Our Services <MdOutlineMedicalServices />
          </Button>
          <Button  onClick={() => document.getElementById("speciality").scrollIntoView({ behavior: "smooth" })}
            variant="contained"
            color="primary"
            className="flex justify-center items-center gap-2 px-3 sm:px-4 py-2 w-4/5 sm:w-fit text-lg font-medium  rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-nowrap "
          >
            Book Appointment <FaArrowRight />
          </Button>
        </div>
      </div>

      {/* ----------------- Right Section ----------------- */}
      <div className="w-full md:w-1/2 flex  justify-center md:items-center ">
        <img
          src={images.home}
          alt="Healthcare"
          className="w-full h-full md:w-80 md:h-80 lg:w-96 lg:h-96  object-cover  rounded-full bg-blue-300 shadow-lg md:backdrop-blur-md"
        />
      </div>
    </div>
  );
};

export default Header;
