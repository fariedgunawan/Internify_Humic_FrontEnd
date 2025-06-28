import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../Layout/NavbarAdmin";
import SidebarAdmin from "../Layout/SidebarAdmin";

const KontenAktifAdmin = () => {
  const navigate = useNavigate();

  const dataKonten = [
    {
      id: 1,
      tipe: "Product",
      judul: "UI/UX Designer",
      tanggal: "12-09-2025",
    },
    {
      id: 2,
      tipe: "Internship",
      judul: "Frontend Dev",
      tanggal: "12-09-2025",
    },
    {
      id: 3,
      tipe: "Event",
      judul: "Hackathon",
      tanggal: "12-09-2025",
    },
    {
      id: 4,
      tipe: "News",
      judul: "Peluncuran Produk",
      tanggal: "12-09-2025",
    },
    {
      id: 5,
      tipe: "News",
      judul: "Peluncuran Produk",
      tanggal: "12-09-2025",
    },
    {
      id: 6,
      tipe: "News",
      judul: "Peluncuran Produk",
      tanggal: "12-09-2025",
    },
  ];

  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />
      {/* End Navbar Section */}

      <div className="sidebar-content flex flex-row">
        {/* Sidebar Section */}
        <SidebarAdmin />
        {/* end Sidebar Section */}

        {/* Content Section */}
        <div className="content-section p-10 bg-white w-[100rem]">
          <h2 className="font-semibold text-[24px] mb-10">Produk Humic</h2>

          <div className="table-section">
            <div className="overflow-x-auto w-full h-[770px] ">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left">
                    <th className="px-6 py-3">Tipe</th>
                    <th className="px-6 py-3">Judul</th>
                    <th className="px-6 py-3">Tanggal Unggah</th>
                    <th className="px-6 py-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataKonten.map((konten) => (
                    <tr key={konten.id} className="hover:bg-gray-50">
                      <td className="px-6 py-3">{konten.tipe}</td>
                      <td className="px-6 py-3">{konten.judul}</td>
                      <td className="px-6 py-3">{konten.tanggal}</td>
                      <td className="px-6 py-3 flex gap-2">
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
                        <button
                          className="bg-[#2CAEFF] text-white p-2 rounded-xl"
                          onClick={() =>
                            navigate(
                              `/KontentAktif/edit/${konten.id}?tipe=${konten.tipe}`
                            )
                          }
                        >
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </button>

                        {/* Tombol Arsipkan */}
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
                              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
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
    </div>
  );
};

export default KontenAktifAdmin;
