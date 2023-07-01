import { NewsProps } from "@/utils/interface"
import Image from "next/image"
import { useRef } from "react"

const HorizontalNews = ({ news } : any) => {
    const contentWrapper = useRef(null)

    return (
        <div>
            <h2 className="text-[24px] font-semibold">News</h2>

            <ul className="flex">
                {news.map((item : NewsProps) => (
                    <li key={item.id}>
                        <Image
                            width={500}
                            height={500}
                            className="w-full h-full"
                            src={item.image}
                            alt={item.title}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HorizontalNews