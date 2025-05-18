import humiclogo from "../assets/whiteLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col px-[140px] bg-[#263742] mt-[60px] text-white pt-[60px] pb-[20px]">
      <div className="head-of-footer flex flex-row justify-between">
        {/* Right Section */}
        <div className="right-section flex flex-col items-start">
          <img src={humiclogo} className="w-[160px]" alt="" />
          <p className="text-[16px] mt-[20px]">
            <span className="font-bold text-[16px]">Gedung Kultubai Selatan, Blok F</span> <br /> Jl. Telekomunikasi, Terusan Buah Batu Bandung <br /> Jawa Barat, Indonesia. 40257
          </p>
          <div className="icons-media flex flex-row items-center gap-[20px] mt-[40px]">
            <div className="instagram p-[10px] border-2 rounded-[50%]">
              <FaInstagram className="text-[24px]" />
            </div>
            <div className="linkedin p-[10px] border-2 rounded-[50%]">
              <FaLinkedinIn className="text-[24px]" />
            </div>
            <div className="mail p-[10px] border-2 rounded-[50%]">
              <MdOutlineEmail className="text-[24px]" />
            </div>
          </div>
        </div>
        {/* Left Section */}
        <div className="left-section flex flex-row gap-[50px]">
          <div className="sec-1 flex flex-col gap-3">
            <p className="font-bold">Internship</p>
            <p>Beranda</p>
            <p>Tentang</p>
            <p>Life at Humic</p>
          </div>
          <div className="sec-2 flex flex-col gap-3">
            <p className="font-bold">Lainnya</p>
            <p>Humic website</p>
            <p>Our Activity</p>
            <p>Life at Humic</p>
            <p>Our developer</p>
          </div>
        </div>
      </div>
      <h2 className="flex justify-center items-center mt-[80px]">
        &copy; Copyright 2025 Humic Research Center <span className="font-bold ml-[10px]">Persyaratan Layanan | Kebijakan Privasi</span>
      </h2>
    </div>
  );
};

export default Footer;
