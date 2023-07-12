import { fetchVideoDetail } from "@/lib/fetch/get-video-detail"
import VideoPlayer from "@/components/video-player"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const TrainingVideoId = async ({
    params: { id }
}: {
    params: { id: string }
}) => {

    const videoDetail = await fetchVideoDetail(id)

    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="px-8 container mx-auto mt-8 xl:px-12">
                <div>
                    <h2 className="font-semibold md:text-[20px] lg:text-[25px] xl:text-[30px] mb-6">{videoDetail?.title}</h2>
                    <VideoPlayer video_url={videoDetail?.video_url ? videoDetail?.video_url : ""} thumbnail_ulr={videoDetail?.thumbnail_ulr} />
                    <div className="mt-6 flex justify-between items-center gap-8 mx-12 pb-6 border-b border-[#666]">
                        <p>{videoDetail?.instructor}</p>
                        <span>{videoDetail?.views} : views</span>
                    </div>
                    <p className="mx-12 text-[16px] my-6">{videoDetail?.description}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainingVideoId