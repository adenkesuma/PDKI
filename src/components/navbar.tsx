"use client"
import { FC, useState } from "react"
import Image from "next/image"
import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"
import Login from "./login.tsx"

const Navbar: FC = () => {
  const [show, setShow] = useState<Boolean>(false)
  const handleShowLogin = () => setShow(true)

  return (
    <>
      <nav className="py-4 px-4 sm:px-0 container mx-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl md:text-4xl">PDKI</span>
          <ul className="hidden sm:flex justify-center gap-0 md:gap-2 items-center">
            <li>
              <Image
                className="w-[50px] sm:w-[80px] md:w-full" 
                src={IMA} 
                alt="logo the indonesian medical association"
              />
            </li>
            <li>
              <Image 
                className="w-[50px] sm:w-[80px] md:w-full"
                src={WONCA} 
                alt="logo indonesian association of family physicians (IAFP)"
              />
            </li>
            <li>
              <Image 
                className="w-[50px] sm:w-[80px] md:w-full"
                src={PDKI} 
                alt="logo WONCA (world family doctors caring for people 'ASIA FACIFIC')"
              />
            </li>
          </ul> 
          <button onClick={handleShowLogin} className="bg-[#274698] px-6 py-[8px] duration-75 text-white md:py-[12px] md:px-8 rounded-3xl font-medium text-[16px] md:text-[18px]">
            Login
          </button>
        </div>
      </nav>
      {show === true && <Login handleShowLogin={handleShowLogin} setShow={setShow}/>}
    </>
  )
}

export default Navbar
