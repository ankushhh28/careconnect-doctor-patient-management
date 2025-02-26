import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllDoctors from "./Pages/AllDoctors";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Appointments from "./Pages/Appointments";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import About from "./Pages/About";
import AppContextProvider from "./Context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<AllDoctors />} />
          <Route path="/doctors/speciality" element={<AllDoctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/my-appointments" element={<Appointments />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
