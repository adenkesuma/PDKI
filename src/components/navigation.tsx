import { FC } from "react"
import { navigation } from "../utils/links-text.ts"
import Link from "next/link"

const Navigation: FC = () => {
  return (
    <nav className="rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#274698] to-[#329E93] py-4 px-8 lg:px-12">
      <ul className="w-full flex justify-center items-center gap-20 snap-x overflow-x-auto">
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
