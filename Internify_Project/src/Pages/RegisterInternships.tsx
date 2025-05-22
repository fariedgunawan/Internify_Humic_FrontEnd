import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { useNavigate } from "react-router-dom";

const RegisterInternships = () => {
  const navigate = useNavigate();
  return (
    <div className="body-of-register min-h-screen bg-[#F8F9FA]">
      {/* Navbar Section */}
      <div className="nav-section py-[20px]">
        <Navbar />
      </div>

      {/* Section of input */}
      <div className="form-input-container flex flex-col text-[#494949] justify-center items-center">
        {/* Title Form */}
        <div className="title-of-form">
          <h2 className="font-bold text-[32px] text-black mt-[40px]">UI/UX Designer</h2>
        </div>

        {/* Form Section */}
        <form className="w-full max-w-[70rem] px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nama Depan */}
          <div>
            <label className="block mb-1 font-bold">Nama depan</label>
            <input type="text" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="John" />
          </div>

          {/* Nama Belakang */}
          <div>
            <label className="block mb-1 font-bold">Nama belakang</label>
            <input type="text" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="Doe" />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-bold">Email</label>
            <input type="email" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="johndoe@email.com" />
          </div>

          {/* Kontak */}
          <div>
            <label className="block mb-1 font-bold">Kontak</label>
            <input type="text" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="Lorem ipsum" />
          </div>

          {/* Jurusan */}
          <div>
            <label className="block mb-1 font-bold">Jurusan</label>
            <input type="text" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="Lorem ipsum" />
          </div>

          {/* Skill */}
          <div>
            <label className="block mb-1 font-bold">Skill</label>
            <input type="text" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" placeholder="Lorem ipsum" />
          </div>

          {/* CV */}
          <div>
            <label className="block mb-1 font-bold">CV (Curiculum vitae)</label>
            <input type="file" accept="application/pdf" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" />
            <p className="text-sm text-[#C3423F] mt-1">*only accept pdf files only</p>
          </div>

          {/* Portofolio */}
          <div>
            <label className="block mb-1 font-bold">Portofolio</label>
            <input type="file" accept="application/pdf" className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 text-black" />
            <p className="text-sm text-[#C3423F] mt-1">*only accept pdf files only</p>
          </div>

          {/* Motivasi */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-bold">Motivasi ingin bergabung ke Humic?</label>
            <textarea className="w-full border-2 border-[#A9B5C0] rounded-md p-2 mt-3 min-h-[120px] text-black" placeholder="Lorem ipsum" />
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-[16px] text-black">
              Dengan melanjutkan, saya mengonfirmasi bahwa saya telah membaca secara seksama dan menyetujui <span className="text-[#C3423F] underline">Persyaratan Layanan</span> dan{" "}
              <span className="text-[#C3423F] underline">Kebijakan Privasi</span>.
            </p>
          </div>
        </form>

        <div className="button-submit text-white mt-[40px]">
          <button className="bg-[#C3423F] px-9 rounded-xl py-3 font-bold shadow-2xl" onClick={() => navigate("/RegisterDone")}>
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterInternships;
