import { NewsProps } from "@/utils/interface"
import { TbPlus } from "react-icons/tb"
import CardNews from "./card-news"

const NewsData = ({ news }) => {
  return (
        <main>
      <div className="flex justify-end gap-4">
        <button
          className="flex items-center gap-2 bg-transparent border-2 border-[#274698] rounded-2xl px-4 py-2 text-[#274698] font-medium text-[16px] hover:bg-[#274698] hover:text-[#fff] duration-75"
        >
          <TbPlus className="text-lg" />
          Upload Berita
        </button>
      </div> 

      <div>
        {news.map((item : NewsProps) => (
          <CardNews 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            image={item.image}
            video={item.video}
            content={item.content}
            published={item.published}
            region={item.region}
            publishedDate={item.publishedDate}
            categories={item.categories}
            tags={item.tags}
          />
        ))}
      </div>
    </main>
  )
}

export default NewsData