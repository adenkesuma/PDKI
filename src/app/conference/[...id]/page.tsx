import Image from "next/image"
import Link from "next/link"
import { fetchConferenceDetail } from "@/lib/fetch/get-conference-detail"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const ConferenceId = async ({
    params: { id }
}: {
    params: { id: string }
}) => {

    const conferenceDetail = await fetchConferenceDetail(id)

    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="px-8 container mx-auto mt-8 xl:px-12">
                <div>
                    <h2 className="md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-[#1a1a1a]">{conferenceDetail?.title}</h2>
                    <p className="mt-2 text-[14px] md:text-[16px] xl:text-[18px] font-medium">Topic : {conferenceDetail?.topic}</p>

                    <figure className="mt-10">
                        <Image
                            width={400}
                            height={400}
                            className="w-full h-full rounded-2xl"
                            src={process.env.BASE_URL + conferenceDetail?.image}
                            alt={conferenceDetail?.title}
                        />
                    </figure>

                    <div className="px-4 lg:px-12 mt-8 mb-8">
                        <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]">
                            {conferenceDetail?.description}
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                            <p className="border-b-2 border-[#555] w-[100px]">{" "}</p>
                            <p className="text-[#1a1a1a] font-medium text-[14px] md:text-[16px]"><i>{conferenceDetail?.speakers}</i></p>
                        </div>
                        <div className="mt-8 flex flex-col gap-2">
                            <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Penyelenggara: {conferenceDetail?.organizer}</p>
                            <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Location: {conferenceDetail?.location}</p>
                            <p className="text-[14px] md:text-[16px] font-medium text-[#1a1a1a]">Link url click :
                                <Link className="text-[#274698] hover:font-bold" href={conferenceDetail?.websiteUrl}>
                                    {" "}disini
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConferenceId