import Navbar from "../Layout/Navbar";
import team from "../assets/teamwokr.jpg";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import cardimage from "../assets/card.png";
import bghero1 from "../assets/hero1.png";
import Footer from "../Layout/Footer";
import Faq from "../Layout/Faq";


const Landing = () => {
  return (
    <div className="body-landing bg-[#F8F9FA] min-h-screen">
      <div className="navbar-section py-[20px]">
        <Navbar />
      </div>
      {/* Hero Section */}
      <div
        className="hero-section relative flex flex-col items-start justify-center h-[350px] mx-[20px] mt-[20px] rounded-2xl overflow-hidden p-[30px] text-white"
        style={{
          backgroundImage: `url(${bghero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <h2 className="font-bold text-[40px] text-white">Tingkatkan keahlian, perluas kesempatan</h2>
          <h2 className="font-semibold text-[20px] text-white mt-[10px]">Asah keterampilanmu dan jadilah mahasiswa yang siap bersaing di dunia industri</h2>

          {/* Search Section */}
          <div className="search-section bg-white p-[15px] rounded-xl shadow-md w-full max-w-lg mt-[40px] text-black">
            <form className="flex items-center gap-3">
              <input type="text" placeholder="Cari program magang atau pelatihan..." className="flex-1 outline-none text-[16px] px-3 py-2" />
              <svg className="w-7 h-7 text-red-700 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
              </svg>
            </form>
          </div>
        </div>
      </div>
      {/* Hero 2 section */}
      <div className="hero2-section flex flex-row items-center mx-[20px] mt-[50px] rounded-2xl justify-between overflow-hidden relative">
        {/* Text Section */}
        <div className="text-section w-[700px] z-10 px-[30px] py-[40px]">
          <h2 className="font-bold text-[32px] mb-4">Life at Humic Engineering</h2>
          <p className="font-medium text-[16px]">
            Raih pengalaman internship yang bernilai dengan berkontribusi langsung dalam pengembangan solusi teknologi kami. Kembangkan kompetensi Anda melalui keterlibatan nyata dalam proyek IT serta bimbingan langsung dari para expert di
            bidang Software engineering dan IoT.
          </p>
        </div>

        {/* Image Section with Gradient */}
        <div className="image-section w-[70rem] h-full relative">
          <img src={team} alt="Team" className="w-full h-full object-cover" />

          {/* Gradient Overlay */}
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#F8F9FA] via-white/60 to-transparent"></div>
        </div>
      </div>
      {/* Hero 3 Section */}
      <div className="hero-3-section flex flex-row items-center justify-between mx-[200px] mt-[60px] relative">
        <div className="relative w-[550px] h-[600px]">
          {/* Tengah (gambar besar) */}
          <img src={person1} alt="" className="absolute top-1/2 left-1/2 w-60 h-80 object-cover rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Kanan atas */}
          <img src={person4} alt="" className="absolute top-6 right-6 w-38 h-46 object-cover rounded-lg shadow-md z-20" />

          {/* Kiri atas */}
          <img src={person3} alt="" className="absolute top-0 left-0 w-34 h-42 object-cover rounded-lg shadow-md z-30" />

          {/* Kiri bawah */}
          <img src={person2} alt="" className="absolute bottom-4 left-6 w-38 h-46 object-cover rounded-lg shadow-md z-40" />
        </div>

        <div className="content-section flex flex-col items-start w-[650px]">
          <h2 className="font-bold text-[32px]">Kata mereka tentang Humic Engineering</h2>
          <p className="font-medium text-[16px] mt-[16px]">
            Humic engineering menjadi tempat yang menyenangkan bagi saya, karena dapat meningkatkan kemampuan saya dalam melakukan desain UI/UX. Banyak pembelajaran yang berharga serta memiliki lingkungan yang suportif
          </p>
          <p className="text-[16px] text-[#C3423F] font-bold mt-[20px]">Indra, Humic Internship Batch 3 2025 </p>
        </div>
      </div>

      {/*Hero 4 Section  */}
      <div className="hero4-section flex flex-col justify-center items-center mt-[50px]">
        {/* Title section */}
        <h2 className="font-bold text-[32px] flex justify-center">Jelajahi posisi yang kamu inginkan</h2>

        {/* Card Section */}
        <div className="card-container mt-[110px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[100px] mx-[10px]">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${cardimage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

              {/* Text Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
                <div className="font-semibold text-[20px] leading-[50px]">
                  Backend
                  <br />
                  Developer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero 5 Section FaQ */}
      <Faq />

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Landing;
