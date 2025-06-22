import Navbar from "../Layout/Navbar";
import bghero1 from "../assets/hero2about.png";
import bghero2 from "../assets/hero1about.png";
import bghero3 from "../assets/hero3about.png";
import part1 from "../assets/part1.png";
import part2 from "../assets/part2.png";
import part3 from "../assets/part3.png";
import part4 from "../assets/part4.png";
import part5 from "../assets/part5.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Layout/Footer";

const slides = [
  {
    image: bghero1,
    title: "About Us",
    description:
      "Research Center Human Centric Engineering (RC HUMIC), merupakan pusat penelitian Telkom University yang berfokus pada pengembangkan rekayasa teknologi yang berkaitan dengan dukungan aktivitas manusia sehari-hari seperti bidang komputasi, informatika, elektronika, robotik, mekanikal, dan teknik biomedis.",
  },
  {
    image: bghero2,
    title: "Visi",
    description:
      "To become an excellent research center in the field of engineering to improve the human health and prosperity",
  },
  {
    image: bghero3,
    title: "Misi",
    description:
      "1. Becoming the science and technology excellent center in the field of embedded sensor systems to support biomedical applications based on the Internet of Things (IoT). 2. Becoming the science and technology excellent center on development remote health monitoring systems based on Internet of Things (IoT).",
  },
];

const missions = [
  "Becoming the science and technology excellent center in the field of embedded sensor systems to support biomedical applications based on the Internet of Things (IoT).",
  "Becoming the science and technology excellent center on development remote health monitoring systems based on Internet of Things (IoT).",
  "Becoming the science and technology excellent center on Big Data Analytic.",
  "Becoming the science and technology excellent center on health development of Information and Communication Technology (ICT).",
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIndex];

  const items = Array(8).fill({
    title: "Health IoT",
    image: bghero2,
  });

  const navigate = useNavigate();

  return (
    <div className="body-of-aboutus bg-[#F8F9FA] min-h-screen">
      {/* Navbar Section */}
      <div className="navbar-section py-5">
        <Navbar />
      </div>

      {/* Hero Section 1 */}
      <div
        className="hero-section relative flex flex-col items-start justify-end
                   h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]
                   mx-5 sm:mx-[25px] mt-5 rounded-2xl overflow-hidden p-6 sm:p-10 md:p-14 text-white transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-full">
          <div className="container-of-content flex flex-col md:flex-row items-start md:items-end md:justify-between gap-6 md:gap-0">
            <div className="right-section max-w-full md:max-w-[670px]">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                {currentSlide.title}
              </h2>
              {/* Mission Control */}
              {currentSlide.title === "Misi" ? (
                <ol className="list-decimal pl-5 space-y-2 font-normal text-sm sm:text-base md:text-lg mt-3 text-white">
                  {missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
                </ol>
              ) : (
                <p className="font-normal text-sm sm:text-base md:text-lg mt-3 text-white">
                  {currentSlide.description}
                </p>
              )}
            </div>

            {/* Arrow Controls */}
            <div className="left-section flex flex-row items-center gap-6">
              <button
                onClick={prevSlide}
                className="icon-1-right bg-white rounded-full p-2 sm:p-3 md:p-4 hover:bg-gray-200 transition"
                aria-label="Previous Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="icon-1-right bg-white rounded-full p-2 sm:p-3 md:p-4 hover:bg-gray-200 transition"
                aria-label="Next Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section 2 Partnership */}
      <div className="hero-2-partnership bg-[#FAF0EF] flex flex-col md:flex-row items-center justify-between mt-12 px-5 sm:px-20 py-16">
        <div className="caption-hero-2 flex flex-col items-start w-full md:w-[540px] mb-8 md:mb-0">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Partnership
          </h2>
          <h2 className="font-normal text-sm sm:text-base mt-2">
            Kami bersama-sama menciptakan solusi yang memberdayakan bisnis dan
            meningkatkan efisiensi operasional.
          </h2>
        </div>
        <div className="image-hero-2 flex flex-row flex-wrap justify-start md:justify-center items-center gap-6 md:gap-12 max-w-full md:max-w-[700px]">
          <img
            src={part1}
            alt="Partnership 1"
            className="w-16 sm:w-20 md:w-24"
          />
          <img
            src={part2}
            alt="Partnership 2"
            className="w-16 sm:w-20 md:w-24"
          />
          <img
            src={part3}
            alt="Partnership 3"
            className="w-16 sm:w-20 md:w-24"
          />
          <img
            src={part4}
            alt="Partnership 4"
            className="w-16 sm:w-20 md:w-24"
          />
          <img
            src={part5}
            alt="Partnership 5"
            className="w-16 sm:w-20 md:w-20"
          />
        </div>
      </div>

      {/* Hero section 3 */}
      <div className="hero-3-research-product mt-12 px-5 sm:px-20">
        <div className="title-container flex flex-row justify-between items-center mb-6">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Hasil produk research
          </h2>
          <div className="arrow-container flex flex-row items-center gap-6">
            <button
              className="left bg-[#C3423F] p-2 sm:p-3 rounded-full hover:bg-red-700 transition"
              aria-label="Previous research product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="right bg-[#C3423F] p-2 sm:p-3 rounded-full hover:bg-red-700 transition"
              aria-label="Next research product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero section 3 content */}
      <div className="hero-3-section-content px-5 sm:px-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden flex flex-col"
              onClick={() => navigate("/DetailsProduct")}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-start">
                <p className="font-semibold text-base sm:text-lg">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
