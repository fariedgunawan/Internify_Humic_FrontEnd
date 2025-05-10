import Navbar from "../Layout/Navbar";

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
          backgroundImage: "url('https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
    </div>
  );
};

export default Landing;
