import NavbarAdmin from "../Layout/NavbarAdmin";
import SidebarAdmin from "../Layout/SidebarAdmin";

const InternshipDetailsAdmin = () => {
  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />

      <div className="sidebar-content flex flex-row">
        {/* Side Bar Section */}
        <SidebarAdmin />

        {/* Content Section */}
        <div className="content-section p-10 bg-white w-[100rem]">
          <h2 className="text-[24px] font-semibold mb-15">Detail Pelamar</h2>

          {/* Details Pelamar */}
          <div className="user-details-section flex flex-row items-start justify-between mb-13">
            <div className="user-caption flex flex-col items-start gap-2">
              <h2 className="text-[24px] font-semibold">Jhon Doe</h2>
              <h2 className="text-[#747474]">example@gmail.com</h2>
              <h2 className="text-[#747474]">+6281389214045</h2>
            </div>
            {/* Accept or not section */}
            <div className="accept-user flex flex-row items-center gap-3">
              <button className="bg-[#3BB525] hover:bg-green-600 text-white px-3 py-2 rounded-xl flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>{" "}
                Terima
              </button>
              <button className="bg-[#C3423F] hover:bg-red-600 text-white px-3 py-2 rounded-xl flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>{" "}
                Tolak
              </button>
            </div>
          </div>

          {/* Soft file */}
          <div className="soft-file-section flex flex-row items-start gap-60 mb-16">
            <div className="left-section flex flex-col items-start gap-5">
              <h2>
                {" "}
                <span className="font-semibold">Jurusan : </span>S1 Rekayasa
                Perangkat Lunak
              </h2>
              <h2>
                {" "}
                <span className="font-semibold">Posisi yang dilamar :</span>
                UI/UX Design
              </h2>
              <div className="skill-container flex flex-row items-center gap-3">
                <h2 className="font-semibold">Skill: </h2>
                <h2 className="text-[#9F9F9F] font-semibold px-[15px] py-[2px] border border-[#9F9F9F] rounded-3xl">
                  Figma
                </h2>
                <h2 className="text-[#9F9F9F] font-semibold px-[15px] py-[2px] border border-[#9F9F9F] rounded-3xl">
                  Elementor
                </h2>
                <h2 className="text-[#9F9F9F] font-semibold px-[15px] py-[2px] border border-[#9F9F9F] rounded-3xl">
                  Framer
                </h2>
              </div>
            </div>
            <div className="right-section flex flex-col items-start gap-5">
              <div className="cv-section flex flex-row items-center gap-2">
                <h2 className="font-semibold">CV : </h2>
                <div className="cv-content flex flex-row items-center gap-2 px-5 py-2 rounded-xl bg-[#D78108] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                  <h2 className="font-semibold">CV</h2>
                </div>
              </div>
              <div className="cv-section flex flex-row items-center gap-2">
                <h2 className="font-semibold">Portofolio : </h2>
                <div className="cv-content flex flex-row items-center gap-2 px-5 py-2 rounded-xl bg-[#995010] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                  <h2 className="font-semibold">Portofolio</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="motivation flex flex-col items-start w-full">
            <h2 className="font-semibold text-[16px] mb-5">Motivasi</h2>
            <p className="text-[16px] leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Duis vivamus varius nec
              sed et leo. A dictumst interdum mattis leo. Sed sagittis duis sem
              viverra in odio id. Ipsum dis viverra eu ac nullam. Mauris
              adipiscing cras magna mi et pellentesque a eu sapien. Nec neque
              turpis eu massa amet faucibus. Mattis quis vulputate vestibulum
              non nunc in. Purus proin in amet at ante duis vitae. Sed tortor
              mollis arcu elit nulla risus hac. Egestas sollicitudin tempus nisl
              pretium tincidunt semper eget in. Velit lacus maecenas tellus nunc
              augue. Tristique tincidunt mi ac commodo et amet ante. Aliquam
              ipsum ultricies tempus aliquet at vitae mi ullamcorper nunc.
              Fringilla sagittis sagittis porta dignissim sit eu nunc. Tincidunt
              id pretium nulla morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailsAdmin;
