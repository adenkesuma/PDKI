import { NewsProps } from "@/utils/interface"
import { TbPlus } from "react-icons/tb"

const NewsData = ({ news }) => {
    return (
        <div>
            <div className="flex justify-end gap-4">
              <button
                className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
              >
                <TbPlus className="text-lg" />
                Add Berita
              </button>
            </div> 

            {news.map((item : NewsProps) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )
}

export default NewsData