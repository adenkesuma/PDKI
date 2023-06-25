"use client"
import { FC, useState } from "react"
import Image from "next/image"
import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"
// import Login from "./login.tsx"

const Navbar: FC = () => {
  // const [show, setShow] = useState<Boolean>(false)
  // const handleShowLogin = () => setShow(true)

  return (
    <>
      <nav className="py-4 px-4 sm:px-0 container mx-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl md:text-4xl">PDKI</span>
          <ul className="flex justify-center gap-0 md:gap-2 items-center">
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
        </div>
      </nav>
      {/* {show === true && <Login handleShowLogin={handleShowLogin} setShow={setShow}/>} */}
    </>
  )
}

export default Navbar
