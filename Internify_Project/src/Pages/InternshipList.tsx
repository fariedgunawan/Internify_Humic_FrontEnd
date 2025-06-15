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
            <input
              type="text"
              placeholder="Cari Nama, Jurusan,"
              className="border px-4 py-2 rounded-2xl w-[20rem]"
            />
            <div className="flex gap-2">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Ekspor ke Excel
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Tambah
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
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1">
                        <span>✔</span> Terima
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1">
                        <span>✖</span> Tolak
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
