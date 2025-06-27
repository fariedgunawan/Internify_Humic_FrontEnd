import { useState } from "react";
import SidebarAdmin from "../Layout/SidebarAdmin";
import NavbarAdmin from "../Layout/NavbarAdmin";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const AddProduct = () => {
  const [tipeKonten, setTipeKonten] = useState("Internship");
  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />
      {/* End of Navbar Section */}

      <div className="sidebar-content flex flex-row">
        {/* Sidebar Section */}
        <SidebarAdmin />
        {/* end Sidebar Section */}

        {/* Content Section */}
        <div className="p-10 bg-white w-[100rem]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold">Tambah Konten</h2>
            <button className="bg-[#1F4A92] text-white px-6 py-2 rounded-md font-medium">
              Submit
            </button>
          </div>

          <form className="flex flex-col gap-6 max-w-full">
            {/* Select Tipe Konten */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Tipe Konten</label>
                <select
                  className="border border-gray-300 rounded-lg p-3"
                  value={tipeKonten}
                  onChange={(e) => setTipeKonten(e.target.value)}
                >
                  <option value="Internship">Internship</option>
                  <option value="Product">Product</option>
                  <option value="News">News</option>
                  <option value="Event">Event</option>
                </select>
              </div>
            </div>

            {/* Field untuk Internship */}
            {tipeKonten === "Internship" && (
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">
                    Kategori Internship
                  </label>
                  <select className="border border-gray-300 rounded-lg p-3">
                    <option value="Design">Design</option>
                    <option value="Programming">Programming</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Paid</label>
                  <select className="border border-gray-300 rounded-lg p-3">
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Lokasi</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-3"
                    placeholder="Bandung"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Nama Internship</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-3"
                    placeholder="UI/UX Designer"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">
                    Tanggal Mulai Oprec
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg p-3"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">
                    Tanggal Akhir Oprec
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg p-3"
                  />
                </div>
              </div>
            )}

            {/* Field untuk Product */}
            {tipeKonten === "Product" && (
              <div className="flex flex-col gap-6">
                {/* Baris Tipe & Judul Konten */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Judul Konten</label>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-lg p-3"
                      placeholder="Lorem Ipsum"
                    />
                  </div>
                </div>

                {/* Thumbnail Upload */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Thumbnail</label>
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                    <input
                      type="file"
                      accept=".jpg,.png,.webm"
                      id="uploadThumbnail"
                    />
                  </div>
                  <p className="text-red-500 text-xs">
                    *File harus berformat .jpg .png .webm dengan resolusi
                    maksimal 1024x500
                  </p>
                </div>
              </div>
            )}

            {/* Field untuk News */}
            {tipeKonten === "News" && (
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Judul Berita</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-3"
                    placeholder="Contoh: Nazyshine Resmi Launching!"
                  />
                </div>
              </div>
            )}

            {/* Field untuk Event */}
            {tipeKonten === "Event" && (
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Nama Event</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-3"
                    placeholder="Contoh: Webinar UI/UX"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Tanggal Event</label>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg p-3"
                  />
                </div>
              </div>
            )}

            {/* Common Field: Isi Konten */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Isi Konten</label>
              <div className="border border-gray-300 rounded-lg p-2">
                <FroalaEditor
                  tag="textarea"
                  config={{
                    placeholderText: "Tulis konten di sini...",
                    charCounterCount: true,
                    toolbarSticky: true,
                    heightMin: 200,
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
