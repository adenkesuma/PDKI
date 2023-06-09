import { FC } from "react"

interface QuoteProps {}

const Quote: FC<QuoteProps> = () => {
  return (
    <div className="bg-[#274698] rounded-xl p-6">
      <p className="text-white ">
        <span className="font-bold text-[50px]">"</span>
        <span className="text-[20px]">
        We learn that working individually may have a little impact, but together we hand-in-hand
        with other health providers, specializations, and across the countries, we could achieve 
        the highest. Therefore, as the conclusion and resolution of this conference, we will have
        more collaboration between countries, to learn the gaps in the past, fill in the gap of the
        current situation and facing the future together to make better living and environment for  
        generations to come
        </span>
        <span className="font-bold text-[50px]">"</span>
      </p>
    </div>
  )
}

export default Quote
