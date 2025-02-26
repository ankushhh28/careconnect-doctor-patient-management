import { Avatar, AvatarGroup, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-auto w-full flex-col gap-10 bg-gradient-to-br from-white via-blue-50 to-blue-200 px-6 py-12 sm:gap-14 sm:px-12 md:flex-row md:gap-16 md:px-20 md:py-16 lg:px-24">
      {/* ----------------- Left Section ----------------- */}
      <div className="w-full space-y-6 sm:mt-6 sm:space-y-8 md:w-1/2 md:space-y-10">
        <h1 className="text-3xl font-bold leading-snug tracking-normal text-gray-900 sm:text-5xl">
          Get Consult with our <span className="text-blue-600">Experts!</span>
        </h1>

        <p className="text-lg text-gray-700 sm:max-w-xl sm:text-lg md:w-full md:text-xl">
          Connect with top medical professionals for personalized consultations.
          CareConnect ensures seamless appointments, expert guidance, and a
          hassle-free healthcare experience.
        </p>

        {/* ------------------- Buttons Section --------------------------- */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:flex-col md:items-start lg:flex-row lg:justify-start">
          <Button
            variant="outlined"
            color="primary"
            className="flex w-4/5 items-center justify-center gap-2 text-nowrap rounded-lg border-2 border-blue-600 px-3 py-2 text-lg font-medium transition duration-300 hover:bg-blue-600 hover:text-white sm:w-fit sm:px-4"
          >
            Our Services <MdOutlineMedicalServices />
          </Button>
          <Button
            onClick={() =>
              document
                .getElementById("speciality")
                .scrollIntoView({ behavior: "smooth" })
            }
            variant="contained"
            color="primary"
            className="flex w-4/5 items-center justify-center gap-2 text-nowrap rounded-lg px-3 py-2 text-lg font-medium shadow-md transition duration-300 hover:bg-blue-600 sm:w-fit sm:px-4"
          >
            Book Appointment <FaArrowRight />
          </Button>
        </div>
      </div>

      {/* ----------------- Right Section ----------------- */}
      <div className="flex w-full justify-center md:w-1/2 md:items-center">
        <img
          src={images.home}
          alt="Healthcare"
          className="h-full w-full rounded-full bg-blue-300 object-cover shadow-lg md:h-80 md:w-80 md:backdrop-blur-md lg:h-96 lg:w-96"
        />
      </div>
    </div>
  );
};

export default Header;
