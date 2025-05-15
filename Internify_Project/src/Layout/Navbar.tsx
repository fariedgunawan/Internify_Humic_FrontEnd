import { useState } from "react";
import englishflag from "../assets/english.png";
import indonesiaflag from "../assets/indonesia.png";
import humiclogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <div className="body-navbar bg-[#D7E1E8] flex flex-row items-center justify-between px-[25px] mx-[20px] py-[25px] rounded-2xl shadow-md">
      <div className="logo-section font-semibold text-[25px]">
        <img src={humiclogo} onClick={() => navigate("/")} className="w-[150px]" alt="" />
      </div>
      <div className="list-section text-[20px] font-semibold flex flex-row items-center gap-6 relative">
        <h2 className="hover:text-blue-600 cursor-pointer transition duration-200" onClick={() => navigate("/AboutUs")}>
          About Us
        </h2>
        <h2 className="hover:text-blue-600 cursor-pointer transition duration-200">Contact Us</h2>
        <h2 className="hover:text-blue-600 cursor-pointer transition duration-200">Internship</h2>

        {/* Language Dropdown */}
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg border-gray-300 hover:border-blue-500 transition duration-200">
            {language === "EN" ? (
              <>
                <img src={englishflag} alt="English" className="w-7 h-7 rounded-full" />
              </>
            ) : (
              <>
                <img src={indonesiaflag} alt="Indonesia" className="w-7 h-7 rounded-full" />
              </>
            )}
            <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50 transition-all duration-300 ease-out">
              <div onClick={() => handleSelect("ID")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2 transition duration-150">
                <img src={indonesiaflag} alt="Indonesia" className="w-5 h-5 rounded-full" />
                <span>Indonesia</span>
              </div>
              <div onClick={() => handleSelect("EN")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2 transition duration-150">
                <img src={englishflag} alt="English" className="w-5 h-5 rounded-full" />
                <span>English</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
