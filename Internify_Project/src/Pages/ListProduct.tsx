import NavbarAdmin from "../Layout/NavbarAdmin";
import SidebarAdmin from "../Layout/SidebarAdmin";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  id: number;
  nama_project: string;
  created_at: string;
};

const ListProduct = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/hasil-research-api/get`
        );
        const result = await response.json();
        if (response.ok) {
          setProjects(result.data);
        } else {
          console.error("Gagal mengambil data project:", result.message);
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Apakah Anda yakin ingin menghapus project ini?"
    );
    if (!confirmDelete) return;

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      alert("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/hasil-research-api/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Project berhasil dihapus!");
        setProjects((prev) => prev.filter((project) => project.id !== id));
      } else {
        alert(result.message || "Gagal menghapus project.");
      }
    } catch (error) {
      console.error("Gagal menghapus:", error);
      alert("Terjadi kesalahan saat menghapus project.");
    }
  };

  return (
    <div className="page-container">
      <NavbarAdmin />

      <div className="sidebar-content flex flex-row">
        <SidebarAdmin />
        <div className="p-10 bg-white w-[100rem]">
          <div className="title-container flex flex-row justify-between items-center mb-[50px]">
            <h2 className="text-[24px] font-semibold">Daftar Project</h2>
            <button
              className="px-[20px] py-[10px] rounded-xl bg-[#1F4A92] hover:bg-[#677c9f] text-white font-semibold"
              onClick={() => navigate("/AddProductHumic")}
            >
              Tambah
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-6 py-3">Nama Project</th>
                  <th className="px-6 py-3">Tanggal Unggah</th>
                  <th className="px-6 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{project.nama_project}</td>
                    <td className="px-6 py-3">
                      {new Date(project.created_at).toLocaleDateString()}
                    </td>
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
                          navigate(`/EditProductHumic/${project.id}`)
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
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 7.125 18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>

                      {/* Tombol Hapus */}
                      <button
                        className="bg-[#E41E1E] text-white p-2 rounded-xl"
                        onClick={() => handleDelete(project.id)}
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {projects.length === 0 && (
              <p className="text-gray-500 mt-4">Belum ada data project.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
