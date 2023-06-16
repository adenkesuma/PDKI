"use client"
import { FC, useState } from "react"
import Image from "next/image"
import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"
import Login from "./login.tsx"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [show, setShow] = useState<Boolean>(false)

  const handleShowLogin = () => setShow(true)

  return (
    <>
      <nav className="py-4 px-4 sm:px-0 container mx-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl md:text-4xl">PDKI</span>
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
          <div className="flex items-center gap-6"> 
            <button className="px-6 py-[5px] md:px-10 md:py-3 rounded-3xl bg-[#274698] text-white font-medium text-[16px] md:text-[18px]" onClick={handleShowLogin}>
                Masuk
            </button>
          </div> 
        </div>
      </nav>
      {show === true && <Login handleShowLogin={handleShowLogin} setShow={setShow}/>}
    </>
  )
}

export default Navbar
