import { images } from "../assets/assets";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="relative -bottom-72 md:-bottom-80 lg:-bottom-96  w-full h-auto bg-blue-100 px-8 sm:px-12 md:px-16 lg:px-20 py-6">
      {/* ----------------------------- Footer Content ----------------------------------- */}

      <div className="flex justify-between flex-wrap gap-6 ">
        {/* --------------------------- LOGO+CONTENT ------------------------------------- */}
        <div className="flex flex-col gap-2">
          <img src={images.logo} alt="logo" className="w-32 sm:w-36 md:w-44" onClick={()=>navigate('/')}/>
          <p className="text-gray-700 max-w-md sm:text-base">
            Careconnect is dedicated to providing seamless healthcare management
            for patients and doctors. Our mission is to enhance communication,
            simplify appointments, and improve overall patient care, ensuring
            your health is always a priority.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------ */}
        <div className="flex flex-col gap-2 sm:gap-6">
          <h1 className="text-lg sm:text-2xl text-gray-800 font-semibold uppercase">
            Company
          </h1>
          <div className="space-y-1 text-gray-700 font-medium text-base">
            <p
              onClick={() => navigate("/")}
              className="hover:text-gray-900 cursor-pointer"
            >
              Home
            </p>
            <p
              onClick={() => navigate("/doctors")}
              className="hover:text-gray-900 cursor-pointer"
            >
              Our Doctors
            </p>
            <p
              onClick={() => navigate("/about")}
              className="hover:text-gray-900 cursor-pointer"
            >
              About us
            </p>
            <p
              onClick={() => navigate("/contact")}
              className="hover:text-gray-900 cursor-pointer"
            >
              Contact us
            </p>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------ */}

        {/* ------------------------------------------------------------------------------ */}
        <div className="flex flex-col gap-6">
          <h1 className="text-lg sm:text-2xl text-gray-800 font-semibold uppercase">
            Get In Touch
          </h1>
          <div className="space-y-2 text-gray-700 font-medium text-base">
            <p className="hover:text-gray-900 flex items-center">
              <span className="mr-2">
                <FaFax />
              </span>
              +1 (555) 123-4567
            </p>
            <a href="mailto:ankushhh28@gmail.com" target="_blank" className="hover:text-gray-900 flex items-center">
              <span className="mr-2">
                <MdEmail />
              </span>
              ankushhh28@gmail.com
            </a>
          </div>
          {/* ----------------------------- SOCIAL-MEDIA ---------------------------------- */}
          <div className="flex flex-col gap-2 mt-2 justify-center items-start">
            <p className="text-lg sm:text-xl text-gray-800 font-semibold uppercase">
              Social media
            </p>
            <div className="flex items-center justify-center gap-4  text-gray-700">
              <a href="https://www.instagram.com/ankush._.28/" target="_blank">
                <InstagramIcon className="text-2xl sm:text-3xl hover:text-[#E4405F] hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a href="https://wa.me/917869863059" target="_blank">
                <WhatsAppIcon className="text-2xl sm:text-3xl hover:text-[#25D366] hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/in/ankush-sanodiya-1b40a7261/"
                target="_blank"
              >
                <LinkedInIcon className="text-2xl sm:text-3xl hover:text-[#0077B5] hover:scale-110 transition duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------- */}
        </div>
        {/* ----------------------------------------------------------------------------------- */}
      </div>

      {/* ---------------------------------- Copyright part --------------------------------------- */}
      <div className="mt-12 sm:mt-16">
        <hr class="border-t-1 border-gray-800 w-4/5 my-3 mx-auto rounded-lg" />
        <h1 className="flex items-center justify-center text-gray-700 tracking-wide">
          <span className="mr-1">
            <CopyrightIcon />
          </span>
          2025 Careconnect. All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
