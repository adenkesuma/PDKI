import { FC } from "react"
import { alegreya } from "@/utils/font"

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => {
  return (
    <div className="bg-[#274698] relative rounded-2xl p-8">
      <p className={`${alegreya.className} text-white px-10 font-medium text-[26px] text-center leading-9`}>
        <span className="font-bold text-[80px] absolute top-8 left-5">{'“'}</span>
        Kami belajar bahwa bekerja secara individu mungkin memiliki dampak yang kecil, tetapi bersama-sama dengan penyedia layanan kesehatan lainnya, spesialisasi, dan di antara negara-negara, kita bisa mencapai yang tertinggi. Oleh karena itu, sebagai kesimpulan dan resolusi dari konferensi ini, kita akan memiliki lebih banyak kolaborasi antara negara-negara, untuk mempelajari kesenjangan di masa lalu, mengisi kesenjangan situasi saat ini, dan menghadapi masa depan bersama untuk menciptakan kehidupan dan lingkungan yang lebih baik bagi generasi mendatang.
        <span className="font-bold text-[80px] absolute bottom-12 right-5">{'„'}</span>
      </p>
    </div>
  )
}

export default Quote
