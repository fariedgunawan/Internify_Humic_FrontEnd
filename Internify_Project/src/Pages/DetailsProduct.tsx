import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import hero1 from "../assets/hero1about.png";

const DetailsProduct = () => {
  return (
    <div className="body-details-of-product bg-[#F8F9FA] min-h-screen">
      {/* Navbar Section */}
      <div className="navbar-section py-[20px]">
        <Navbar />
      </div>
      {/* End Of Navbar Section */}

      <div className="title-of-content flex justify-center mt-[20px] mx-4 md:mx-[20px] mb-[30px] text-center">
        <h2 className="text-[24px] md:text-[32px] font-bold">
          Produk Akhir Magang: Solusi IoT untuk Pemantauan Kesehatan yang
          Efektif dan Real-Time
        </h2>
      </div>

      <div className="content-container flex flex-col gap-[60px] mx-4 md:mx-[100px]">
        {/* Image Section */}
        <img src={hero1} className="w-full" alt="" />
        {/* Image Section */}
        <div className="indicator-section bg-[#FAF0EF] p-[40px] flex flex-col gap-3 items-start rounded-2xl">
          <div className="category flex flex-row sm:flex-row items-start sm:items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#C3423F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>

            <h2 className="text-[#C3423F] font-semibold text-[18px] md:text-[20px]">
              Mobile Apps
            </h2>
          </div>
          <div className="durations flex flex-row sm:flex-row items-start sm:items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#C3423F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <h2 className="text-[#C3423F] font-semibold text-[18px] md:text-[20px]">
              2 Bulan
            </h2>
          </div>
          <div className="time flex flex-row sm:flex-row items-start sm:items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-[#C3423F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h2 className="text-[#C3423F] font-semibold text-[18px] md:text-[20px]">
              16 Juni 2025
            </h2>
          </div>
        </div>

        <div className="paragraf-section flex flex-col items-start gap-6">
          <p className="text-[15px] md:text-[16px] text-justify">
            Program magang di berbagai perusahaan teknologi dan startup semakin
            menjadi wadah bagi para mahasiswa untuk melahirkan inovasi. Salah
            satu bidang yang kini banyak dilirik adalah Internet of Things (IoT)
            untuk sektor kesehatan. Melalui proyek akhir magang, para talenta
            muda ini berhasil mengembangkan berbagai solusi canggih. Salah satu
            yang menonjol adalah "VitalSense IoT", sebuah platform pemantauan
            kesehatan terintegrasi yang menunjukkan potensi besar dalam
            mentransformasi layanan kesehatan di masa depan.
          </p>
          <p className="text-[15px] md:text-[16px] text-justify">
            Tujuan utama dikembangkannya aplikasi VitalSense IoT adalah untuk
            menyediakan sistem pemantauan kondisi vital pasien secara real-time
            dan dapat diakses dari jarak jauh. Aplikasi ini dirancang untuk
            mengumpulkan data penting seperti detak jantung, suhu tubuh,
            saturasi oksigen, dan laju pernapasan melalui sensor-sensor
            nirkabel. Tujuannya adalah agar tenaga medis dapat memantau pasien,
            terutama mereka yang berisiko tinggi atau dalam masa pemulihan di
            rumah, tanpa memerlukan kunjungan fisik yang konstan. Selain itu,
            aplikasi ini bertujuan memberikan peringatan dini (early warning)
            kepada tim medis atau keluarga jika terdeteksi adanya parameter
            vital yang keluar dari batas normal.
          </p>
          <p className="text-[15px] md:text-[16px] text-justify">
            Dampak yang diharapkan dari implementasi VitalSense IoT sangat
            signifikan. Pertama, ia meningkatkan kualitas perawatan pasien
            dengan memungkinkan deteksi dini perburukan kondisi, sehingga
            intervensi medis bisa dilakukan lebih cepat dan berpotensi
            menyelamatkan nyawa. Kedua, aplikasi ini meningkatkan efisiensi
            tenaga medis, memungkinkan mereka memantau lebih banyak pasien
            dengan sumber daya yang ada. Ketiga, VitalSense IoT memberikan rasa
            aman dan kemandirian bagi pasien dan keluarganya, karena kondisi
            kesehatan dapat terpantau terus-menerus. Kehadiran inovasi seperti
            VitalSense IoT, yang lahir dari program magang, membuktikan
            kontribusi nyata generasi muda dalam menciptakan solusi teknologi
            tepat guna untuk sektor kesehatan.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsProduct;
