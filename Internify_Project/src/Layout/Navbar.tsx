import { useState } from "react";
import englishflag from "../assets/english.png";
import indonesiaflag from "../assets/indonesia.png";
import humiclogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [openLang, setOpenLang] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (lang: string) => {
    setLanguage(lang);
    setOpenLang(false);
  };

  return (
    <nav className="bg-[#D7E1E8] px-4 py-5 mx-5 rounded-2xl shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <img src={humiclogo} alt="Humic Logo" onClick={() => navigate("/")} className="w-[130px] cursor-pointer" />

        {/* Burger menu */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)} className="text-gray-800 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={openMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-[18px] font-semibold">
          <button onClick={() => navigate("/AboutUs")} className="hover:text-blue-600 transition">
            About Us
          </button>
          <button className="hover:text-blue-600 transition">Contact Us</button>
          <button onClick={() => navigate("/Internships")} className="hover:text-blue-600 transition">
            Internship
          </button>

          {/* Language dropdown */}
          <div className="relative">
            <button onClick={() => setOpenLang(!openLang)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:border-blue-500 transition">
              <img src={language === "EN" ? englishflag : indonesiaflag} alt={language} className="w-7 h-7 rounded-full" />
              <svg className={`w-4 h-4 transition-transform ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                <div onClick={() => handleSelect("ID")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <img src={indonesiaflag} alt="Indonesia" className="w-5 h-5 rounded-full" />
                  <span>Indonesia</span>
                </div>
                <div onClick={() => handleSelect("EN")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <img src={englishflag} alt="English" className="w-5 h-5 rounded-full" />
                  <span>English</span>
                </div>
              </div>
            )}
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
          <button onClick={() => setOpenMenu(false)} className="block w-full text-left hover:text-blue-600 transition">
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
            <button onClick={() => setOpenLang(!openLang)} className="flex items-center gap-2 mt-2">
              <img src={language === "EN" ? englishflag : indonesiaflag} alt={language} className="w-7 h-7 rounded-full" />
              <svg className={`w-4 h-4 transition-transform ${openLang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openLang && (
              <div className="mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl">
                <div onClick={() => handleSelect("ID")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <img src={indonesiaflag} alt="Indonesia" className="w-5 h-5 rounded-full" />
                  <span>Indonesia</span>
                </div>
                <div onClick={() => handleSelect("EN")} className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-2">
                  <img src={englishflag} alt="English" className="w-5 h-5 rounded-full" />
                  <span>English</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
