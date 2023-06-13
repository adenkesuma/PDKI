import { FC } from "react"
import Image from "next/image"

import Search from "./search.tsx"

import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="mx-auto py-4 container mx-auto">
      <div className="flex justify-between items-center">
        <span className="font-bold text-4xl">PDKI</span>
        <ul className="hidden md:flex justify-center gap-2 items-center">
          <li>
            <Image 
              src={IMA} 
              alt="logo the indonesian medical association"
            />
          </li>
          <li>
            <Image 
              src={WONCA} 
              alt="logo indonesian association of family physicians (IAFP)"
            />
          </li>
          <li>
            <Image 
              src={PDKI} 
              alt="logo WONCA (world family doctors caring for people 'ASIA FACIFIC')"
            />
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  )
}

export default Navbar
