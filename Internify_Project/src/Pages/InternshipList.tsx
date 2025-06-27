import SidebarAdmin from "../Layout/SidebarAdmin";
import NavbarAdmin from "../Layout/NavbarAdmin";

const InternshipList = () => {
  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />
      {/* End of Navbar Section */}

      <div className="sidebar-content flex flex-row">
        {/* Sidebar Section */}
        <SidebarAdmin />
        {/* Sidebar Section */}

        {/* Content Section */}
        <div className="content-section p-10 bg-white w-[100rem]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-[24px]">Internship</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Cari Nama, Jurusan,"
                className="px-4 py-2 rounded-2xl w-[20rem] border border-slate-400"
              />
              <button className="bg-[#227014] hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                Ekspor ke Excel
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-6 py-3 ">Nama</th>
                  <th className="px-6 py-3 ">Posisi</th>
                  <th className="px-6 py-3 ">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Reinhard", position: "UI/UX Designer" },
                  { name: "Farid", position: "Front-end Developer" },
                  { name: "Fuad", position: "Front-end Developer" },
                  { name: "Farhan", position: "Front-end Developer" },
                  { name: "Faisal", position: "Multimedia" },
                  { name: "Alan", position: "Multimedia" },
                  { name: "Reza", position: "Back-end Developer" },
                  { name: "Amba", position: "Back-end Developer" },
                ].map((intern, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-3 ">{intern.name}</td>
                    <td className="px-6 py-3 ">{intern.position}</td>
                    <td className="px-6 py-3  flex gap-2">
                      <button className="bg-[#3BB525] hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1">
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
                      <button className="bg-[#C3423F] hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipList;
