import { useState } from "react";

const faqData = [
  {
    question: "Bagaimana cara magang disini?",
    answer: "Yes, we ship to over 50 countries worldwide with reliable partners.",
  },
  {
    question: "Apakah saya bisa melamar lebih dari satu lowongan?",
    answer: "Once shipped, you will receive a tracking link via email or SMS.",
  },
  {
    question: "Bagaimana saya tahu jika lamaran saya diterima atau ditolak?",
    answer: "We accept returns within 30 days with the original packaging and receipt.",
  },
  {
    question: "Berapa lama durasi magang di Humic?",
    answer: "We accept returns within 30 days with the original packaging and receipt.",
  },
  {
    question: "Apakah data pribadi saya aman?",
    answer: "Once shipped, you will receive a tracking link via email or SMS.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="hero-5-section flex flex-row items-center justify-between mt-[150px] mx-[150px]">
      <div className="content-of-5 w-[610px]">
        <h2 className="font-bold text-[32px]">Frequently Asked Questions</h2>
        <p className="font-medium text-[16px] mt-[16px]">
          Berikut adalah informasi mengenai pertanyaan umum seputar program magang di Humic, termasuk tata cara pendaftaran dan persyaratan yang perlu dipenuhi. Masih ada yang perlu ditanyakan? Silahkan{" "}
          <span className="text-[#C3423F] font-semibold">DM</span> kami
        </p>
      </div>
      <div className="faq-content-list space-y-6 px-4 w-[700px]">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-[#FAF0EF] shadow-md rounded-sm">
            <button onClick={() => toggleItem(index)} className="w-full flex items-center justify-between p-4 focus:outline-none">
              <span className="text-[16px] font-semibold text-left text-[#C3423F]">{faq.question}</span>
              <span className="text-[20px] font-bold text-[#C3423F]">{openIndex === index ? "-" : "+"}</span>
            </button>

            <div className={`px-4 pb-4 text-black transition-all duration-300 ${openIndex === index ? "block" : "hidden"}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
