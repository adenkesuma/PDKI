import Image from "next/image"
import { fetchNewsDetail } from "@/lib/fetch/get-news-detail"

const NewsId = async ({
    params: { id }
} : {
    params: { id: string }
}) => {

    const newsDetail = await fetchNewsDetail(id)

    // date data
    const dateFromNewsDetail = newsDetail?.publishedDate
    const newsDate = new Date(dateFromNewsDetail)
    const year = newsDate.getFullYear()
    const month = newsDate.getMonth()
    const date = newsDate.getDate()

    return (
        <div className="px-8 xl:px-12 container mx-auto mt-8">
            <div>
                <h2 className="md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-[!1a1a1a]">{newsDetail?.title}</h2>
                <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">{newsDetail?.description}</p>
                <p className="text-[14px] md:text-[16px] font-medium mt-2">Published : {`${date} - ${month} - ${year}`}</p>

                <figure className="mt-10">
                    <Image 
                        width={400}
                        height={400}
                        className="w-full h-full rounded-2xl"
                        src={newsDetail?.image} 
                        alt={newsDetail?.title} 
                    />
                </figure>

                <div className="px-4 lg:px-12 mt-8 mb-8">
                    <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                        {newsDetail?.content}
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                        <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                        <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{newsDetail?.tags}</i></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default NewsId