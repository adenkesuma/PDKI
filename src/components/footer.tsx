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
    <footer className="rounded-xl bg-[#274698] mx-auto">
      <div className="m-6 flex justify-between items-start">
        <div>
          <h4>Perhimpunan Dokter Keluarga Indonesia</h4>
          <Image 
            src={LOGOS}
            alt="footer logos white"
          />
        </div>
        <div className="flex justify-center">
          <ul>
            <h4>About</h4>
            {aboutFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <h4>Contact Us</h4>
            {contactUsFooter.map((item) => (
              <li key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
          <ul>
            <h4>Terms & Conditions</h4>
            {termsConditionsFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
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
