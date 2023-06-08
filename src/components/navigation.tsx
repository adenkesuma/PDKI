import { FC } from "react"
import { navigation } from "../utils/links-text.ts"
import Link from "next/link"

const Navigation: FC = () => {
  return (
    <nav className="rounded-tl-2xl rounded-tr-2xl bg-[#274698] py-4 px-4 lg:px-6">
      <ul className="flex justify-between items-center gap-4">
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
