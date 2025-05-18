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
    description: "To become an excellent research center in the field of engineering to improve the human health and prosperity",
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

  return (
    <div className="body-of-aboutus bg-[#F8F9FA] min-h-screen">
      {/* Navbar Section */}
      <div className="navbar-section py-[20px]">
        <Navbar />
      </div>

      {/* Hero Section 1 */}
      <div
        className="hero-section relative flex flex-col items-start justify-end h-[650px] mx-[20px] mt-[20px] rounded-2xl overflow-hidden p-[30px] text-white transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-of-content flex flex-row items-end justify-between">
            <div className="right-section">
              <h2 className="font-bold text-[32px] text-white">{currentSlide.title}</h2>
              {/* Mission Control */}
              {currentSlide.title === "Misi" ? (
                <ol className="list-decimal pl-5 space-y-2 font-regular text-[16px] text-white mt-[10px] w-[670px]">
                  {missions.map((mission, index) => (
                    <li key={index}>{mission}</li>
                  ))}
                </ol>
              ) : (
                <p className="font-regular text-[16px] text-white mt-[10px] w-[670px]">{currentSlide.description}</p>
              )}
            </div>

            {/* Arrow Controls */}
            <div className="left-section flex flex-row items-center gap-[30px]">
              <button onClick={prevSlide} className="icon-1-right bg-white rounded-full p-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button onClick={nextSlide} className="icon-1-right bg-white rounded-full p-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section 2 Partnership */}
      <div className="hero-2-partnership bg-[#FAF0EF] justify-between flex flex-row mt-[50px] px-[80px] py-[80px]">
        <div className="caption-hero-2 flex flex-col items-start w-[540px]">
          <h2 className="font-bold text-[32px]">Partnership</h2>
          <h2 className="font-normal text-[16px] mt-[8px]">Kami bersama-sama menciptakan solusi yang memberdayakan bisnis dan meningkatkan efisiensi operasional.</h2>
        </div>
        <div className="image-hero-2 flex flex-row items-center gap-[50px]">
          <img src={part1} alt="" />
          <img src={part2} alt="" />
          <img src={part3} alt="" />
          <img src={part4} alt="" />
          <img src={part5} alt="" />
        </div>
      </div>

      {/* Hero section 3  */}
      <div className="hero-3-research-product mt-[50px]">
        <div className="title-container flex flex-row justify-between px-[80px]">
          <h2 className="font-bold text-[32px]">Hasil produk research</h2>
          <div className="arrow-container flex flex-row items-center gap-10">
            <div className="left bg-[#C3423F] p-3 rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="right bg-[#C3423F] p-3 rounded-[50%]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero section 3 content */}
      <div className="hero-3-section-content px-[80px] py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
              <div className="text-start pt-[15px]">
                <p className="font-semibold">{item.title}</p>
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
