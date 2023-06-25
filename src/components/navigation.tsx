import { FC } from "react"
import { navigation } from "../utils/links-text.ts"
import Link from "next/link"

const Navigation: FC = () => {
  return (
    <nav className="container mx-auto rounded-tl-3xl rounded-tr-3xl bg-[#274698] py-4 px-4 sm:px-8 lg:px-12">
      <ul className="flex items-center sm:justify-center gap-8 lg:gap-16 xl:gap-20 snap overflow-scroll sm:overflow-auto ">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link} className="text-[14px] lg:text-[16px] text-white font-medium">
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
