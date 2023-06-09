import { FC } from "react"
import Image from "next/image"
import ConferenceImage from "../../public/assets/images/conference.svg"

interface UpcomingConferenceProps {}

const UpcomingConference: FC<UpcomingConferenceProps> = () => {
  return (
    <div className="w-[40%]">
      <h2 className="font-semibold text-[26px] mb-4">Upcoming Conference</h2>
      <div className="rounded-2xl bg-[#274698]">
        <Image
          className="rounded-2xl w-full" 
          src={ConferenceImage}
          alt="conference image"
        />
        <div className="py-4 px-6">
          <h3>28th WONCA Europe Conference 2023</h3>
          <div>
            <span>Brussels, Belgium</span>
            <span>07 jun - 10 jun 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingConference
