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
    <footer className="p-8 rounded-xl bg-[#274698] mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-semibold mb-3 text-white">Perhimpunan Dokter Keluarga <br /> Indonesia</h4>
          <Image 
            src={LOGOS}
            alt="footer logos white"
          />
        </div>
        <div className="flex justify-center gap-10">
          <ul>
            <h4 className="text-lg mb-3 font-semibold text-white">About</h4>
            {aboutFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="text-[16px] text-white">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="text-lg mb-3 font-semibold text-white">Contact Us</h4>
            {contactUsFooter.map((item) => (
              <li key={item.id} className="text-[16px] text-white">
                {item.text}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="text-lg mb-3 font-semibold text-white">Terms & Conditions</h4>
            {termsConditionsFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="text-[16px] text-white">
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
    </footer>
  )
}

export default Footer
