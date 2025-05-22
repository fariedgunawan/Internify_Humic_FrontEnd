import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import { useNavigate } from "react-router-dom";

const InternshipDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="body-of-internships bg-[#F8F9FA] min-h-screen">
      {/* Navbar Section */}
      <div className="navbar-section py-[20px]">
        <Navbar />
      </div>

      {/* Content of Details */}
      <div className="content-of-details px-[170px] w-full mt-[40px]">
        {/* Head of content */}
        <div className="head-of-content flex flex-row justify-between items-center">
          <div className="caption-section flex flex-col items-start">
            <div className="head-caption">
              <h2 className="font-bold text-[32px]">UI/UX Designer</h2>
              <div className="sub-caption flex flex-row items-center font-bold gap-[20px] mt-[20px]">
                <div className="location flex-row flex items-center gap-2 text-[#292D32]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <h2>Bandung, Onsite</h2>
                </div>
                <div className="role flex-row flex items-center gap-2 text-[#292D32]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                  <h2>Design</h2>
                </div>
                <div className="salary flex-row flex items-center gap-2 text-[#292D32]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                  <h2>Paid</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Apply Section Button */}
          <div className="apply-section">
            <button className="font-semibold bg-[#C3423F] text-white text-[14px] shadow-xl px-9 py-3 rounded-2xl" onClick={() => navigate("/RegisterIntern")}>
              Apply
            </button>
          </div>
        </div>

        {/* Section About this job */}
        <div className="requierment-about-job flex flex-col items-start mt-[41px]">
          {/* Description Section */}
          <div className="description-of-jobs flex flex-col items-start text-[#5F5F5F]">
            <h2 className="font-semibold text-[20px] text-black">Deskripsi Pekerjaan : </h2>
            <p className="font-medium text-[16px] mt-[6px]">
              Bertanggung jawab membantu tim desain dalam merancang antarmuka pengguna (UI) yang intuitif dan pengalaman pengguna (UX) yang optimal untuk aplikasi web maupun mobile, melalui wireframe, prototipe, dan desain visual.
            </p>
          </div>

          {/* Qualification Section */}
          <div className="qualification-of-jobs flex flex-col items-start mt-[16px] text-[#5F5F5F]">
            <h2 className="font-semibold text-[20px] mb-[6px] text-black">Kualifikasi : </h2>
            <li>Mahasiswa Universitas Telkom (Semua Jurusan)</li>
            <li>Kreatif dalam mendesain antarmuka dan pengalaman pengguna</li>
            <li>Menguasai pembuatan prototipe menggunakan Figma dan Adobe Photoshop</li>
            <li>Memiliki kemampuan ilustrasi dan desain grafis</li>
            <li>Memahami user research, wireframing, dan usability testing</li>
          </div>

          {/* Benefit Section */}
          <div className="qualification-of-jobs flex flex-col items-start mt-[16px] text-[#5F5F5F]">
            <h2 className="font-semibold text-[20px] mb-[6px] text-black">Benefit : </h2>
            <li>Sertifikat Magang</li>
            <li>Profesional Networking</li>
            <li>Self Improvement</li>
            <li>Uang magang jika masuk ke dalam project</li>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default InternshipDetails;
