import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import doneimg from "../assets/done.png";
import { useNavigate } from "react-router-dom";

const RegisterDone = () => {
  const navigate = useNavigate();
  return (
    <div className="body-of-done min-h-screen bg-[#F8F9FA]">
      {/* Navbar Section */}
      <div className="nav-section py-[20px]">
        <Navbar />
      </div>

      {/* Content Container */}
      <div className="container-of-content flex flex-col justify-center items-center min-h-[70vh]">
        <img src={doneimg} alt="" />
        <h2 className="font-semibold text-[24px] mt-[32px]">Lamaran diterima</h2>
        <p className="mt-[12px] text-[16px] font-normal max-w-[600px] text-center">Kami akan segera memeriksa lamaran kamu. Cek email secara berkala untuk informasi selanjutnya</p>
        <button className="mt-[20px] text-white font-bold bg-[#C3423F] px-10 py-4 rounded-2xl shadow-2xl" onClick={() => navigate("/")}>
          Kembali ke Beranda
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterDone;
