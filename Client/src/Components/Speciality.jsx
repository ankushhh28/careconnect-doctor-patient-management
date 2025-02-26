import { Link } from "react-router-dom";
import { images } from "../assets/assets";
import { specialityData } from "../assets/assets";
export const Speciality = () => {
  return (
    <div id="speciality" className="flex flex-col gap-10  justify-center items-center  px-6 sm:px-12 md:px-20 lg:px-24 py-10 sm:my-8">

      {/* -------------- CENTER HEADING ---------------- */}
      <h1 className=" text-3xl sm:text-5xl  text-gray-800 font-bold">
        Explore Our Specialists
      </h1>

      {/* ------------- DESCRIPTION -------------------- */}
      <p className="text-lg  max-w-3xl text-center text-gray-700">
        Discover highly skilled doctors across multiple specialties, ensuring
        expert care and personalized treatment for all your health concerns
      </p>

      {/* -------------- ICONS ------------------------- */}
      <div className="flex justify-center flex-wrap md:flex-nowrap  gap-3 sm:gap-6">
        {specialityData.map((item, index) => (
          <Link
          to={`/doctors/${item.speciality}`}
            key={index}
            className="flex flex-col justify-center items-center hover:-translate-y-3 transition-all duration-300 ease-in-out"
          >
            <img src={item.image} className="w-20 sm:w-24" alt="" />
            <p className="text-base sm:text-lg text-gray-700 text-nowrap">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
