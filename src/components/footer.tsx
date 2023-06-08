"use client"

import { FC, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { TbChevronDown } from "react-icons/tb"

// import utils
import { aboutFooter, contactUsFooter, termsConditionsFooter } from "../utils/links-text.ts"

// import logos
import LOGOS from "../../public/assets/logos/footer-logos.svg"

const Footer: FC = () => {
  const [hide, setHide] = useState<Boolean>(false)
  
  const handleHide = () => {
    setHide(!hide)
  }

  return (
    <footer className="px-4 md:px-6 py-8 lg:px-10 mb:mb-6 lg:mb-8 xl:mb-14 lg:py-10 rounded-xl bg-[#274698] mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-3 text-white text-center md:text-left">Perhimpunan Dokter <br /> Keluarga Indonesia</h4>
          <Image 
            className="w-[180px] md:w-[220px]"
            src={LOGOS}
            alt="footer logos white"
          />
        </div>
        <div className="flex flex-row justify-center gap-4 xl:gap-16">
          <ul className="flex flex-col items-center">
            <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">About</h4>
            {aboutFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="text-[14px] lg:text-[16px] text-white">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center">
            <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">Contact Us</h4>
            {contactUsFooter.map((item) => (
              <li key={item.id} className="text-[14px] lg:text-[16px] text-white">
                {item.text}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center">
            <h4 className="text-[16px] lg:text-lg mb-3 font-semibold text-white">Terms & Conditions</h4>
            {termsConditionsFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="text-[14px] lg:text-[16px] text-white">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="rounded-[50%] bg-white p-2">
            <TbChevronDown 
              className={hide === false ? "rotate-180 text-2xl" : "text-2xl"}
              onClick={handleHide}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-8 pt-8">
        <p className="text-center text-white text-[14px] lg:text-[16px]">&copy; Copyright PDKI 2023, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
