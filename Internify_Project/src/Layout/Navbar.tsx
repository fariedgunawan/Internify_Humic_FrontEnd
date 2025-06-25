import { useState } from "react";
import humiclogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#D7E1E8] px-4 py-5 mx-5 rounded-2xl shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <img
          src={humiclogo}
          alt="Humic Logo"
          onClick={() => navigate("/")}
          className="w-[130px] cursor-pointer"
        />

        {/* Burger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  openMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-[18px] font-semibold">
          <button
            onClick={() => navigate("/AboutUs")}
            className="hover:text-blue-600 transition"
          >
            About Us
          </button>
          <button className="hover:text-blue-600 transition">Contact Us</button>
          <button
            onClick={() => navigate("/Internships")}
            className="hover:text-blue-600 transition"
          >
            Internship
          </button>

          {/* Language dropdown */}
          <div className="relative">
            <button
              className="bg-blue-600 text-white font-semibold p-3 rounded-xl text-[18px]"
              onClick={() => navigate("/AdminLogin")}
            >
              Login Admin
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="md:hidden mt-4 text-[18px] font-semibold space-y-3">
          <button
            onClick={() => {
              navigate("/AboutUs");
              setOpenMenu(false);
            }}
            className="block w-full text-left hover:text-blue-600 transition"
          >
            About Us
          </button>
          <button
            onClick={() => setOpenMenu(false)}
            className="block w-full text-left hover:text-blue-600 transition"
          >
            Contact Us
          </button>
          <button
            onClick={() => {
              navigate("/Internships");
              setOpenMenu(false);
            }}
            className="block w-full text-left hover:text-blue-600 transition"
          >
            Internship
          </button>

          {/* Language dropdown */}
          <div className="relative">
            <button
              className="hover:text-blue-600 text-black rounded-xl text-[18px]"
              onClick={() => navigate("/AdminLogin")}
            >
              Login Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
