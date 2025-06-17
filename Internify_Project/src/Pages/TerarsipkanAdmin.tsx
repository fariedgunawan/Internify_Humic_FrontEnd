import NavbarAdmin from "../Layout/NavbarAdmin";
import SidebarAdmin from "../Layout/SidebarAdmin";

const TerarsipkanAdmin = () => {
  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />

      <div className="sidebar-content flex flex-row">
        {/* Sidebar Section */}
        <SidebarAdmin />
        {/* Content section */}
        <div className="p-10 bg-white w-[100rem]">
          <div className="title-container flex flex-row justify-between items-center mb-[50px]">
            <h2 className="text-[24px] font-semibold">Halaman Terarsipkan</h2>
          </div>

          {/* Table Section */}

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-6 py-3 ">Tipe</th>
                  <th className="px-6 py-3 ">Judul</th>
                  <th className="px-6 py-3 ">Tanggal unggah</th>
                  <th className="px-6 py-3 ">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tipe: "Product",
                    judul: "UI/UX Designer",
                    upload: "01/01/1979",
                  },
                  {
                    tipe: "Internship",
                    judul: "UI/UX Designer",
                    upload: "01/01/1979",
                  },
                  {
                    tipe: "Product",
                    judul: "UI/UX Designer",
                    upload: "01/01/1979",
                  },
                  {
                    tipe: "Internship",
                    judul: "UI/UX Designer",
                    upload: "01/01/1979",
                  },
                  {
                    tipe: "Product",
                    judul: "UI/UX Designer",
                    upload: "01/01/1979",
                  },
                ].map((intern, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-3 ">{intern.tipe}</td>
                    <td className="px-6 py-3 ">{intern.judul}</td>
                    <td className="px-6 py-3 ">{intern.upload}</td>
                    <td className="px-6 py-3  flex gap-2">
                      {/* Tombol View */}
                      <button className="bg-[#3BE21D] text-white p-2 rounded-xl">
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
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </button>
                      {/* Tombol Edit */}
                      <button className="bg-[#CD8512] text-white p-2 rounded-xl">
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
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                      </button>
                      {/* Tombol Hapus */}
                      <button className="bg-[#E41E1E] text-white p-2 rounded-xl">
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
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

export default TerarsipkanAdmin;
