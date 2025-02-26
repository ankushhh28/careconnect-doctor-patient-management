import { Button } from "@mui/material";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-6 mb-4 mt-2 flex items-center justify-center overflow-hidden rounded-3xl border-2 border-blue-300 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 shadow-lg sm:mx-10 sm:flex-col md:flex-row md:gap-10">
      <div className="flex flex-col items-center justify-center gap-6 px-8 py-7 text-center sm:gap-9 sm:px-10">
        <h1 className="text-3xl font-semibold leading-tight text-gray-800 sm:text-5xl lg:max-w-2xl">
          &ldquo; Don't wait on your health— Get Expert care anytime, anywhere
          &rdquo;
        </h1>
        <button
          onClick={() => {
            navigate("/register");
            scrollTo(0, 0);
          }}
          className="w-fit animate-bounce rounded-full border border-blue-300 bg-white px-6 py-3 text-lg font-medium text-blue-500 shadow-md transition hover:bg-gray-100"
        >
          Sign up now!
        </button>
      </div>
      <img
        src={images.home2}
        alt="Healthcare Banner"
        className="hidden object-cover drop-shadow-2xl sm:block sm:h-96"
      />
    </div>
  );
};

export default Banner;
