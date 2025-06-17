import NavbarAdmin from "../Layout/NavbarAdmin";
import SidebarAdmin from "../Layout/SidebarAdmin";

const AddPartnershipAdmin = () => {
  return (
    <div className="page-container">
      {/* Navbar Section */}
      <NavbarAdmin />

      <div className="sidebar-container flex flex-row">
        {/* Sidebar Section */}
        <SidebarAdmin />
        {/* end of Sidebar Section */}

        <div className="p-10 bg-white w-[100rem]">
          <h2 className="text-[24px] font-semibold mb-[45px]">
            Tambah Partnership
          </h2>

          <div className="content-section flex flex-col w-full">
            <div className="input-section flex flex-row gap-35">
              <div className="name-section flex flex-col items-start gap-[15px]">
                <h2 className="text-[16px] font-bold">Nama</h2>
                <input
                  type="text"
                  placeholder="Nama Partnership"
                  className="border-2 px-[15px] py-[10px] border-[#A9B5C0] rounded-xl w-[600px]"
                />
              </div>
              <div className="file-section flex flex-col items-start gap-[15px]">
                <h2 className="text-[16px] font-bold">Thumbnail</h2>
                <input
                  type="file"
                  accept=".jpg,.png,.webm"
                  placeholder="Nama Partnership"
                  className="border-2 px-[15px] py-[10px] border-[#A9B5C0] rounded-xl w-[600px] "
                />
                <h2 className="text-[#C3423F] text-[12px]">
                  *file harus berformat .jpg .png .webm dengan resolusi maksimal
                  1024 x 500
                </h2>
              </div>
            </div>

            <h2 className="text-[16px] font-bold">Preview</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPartnershipAdmin;
