import { FC } from "react"
import Image from "next/image"

// import logo
import IMA from "../../public/assets/logos/the-indonesia-medical-association.svg"
import WONCA from "../../public/assets/logos/wonca.svg"
import PDKI from "../../public/assets/logos/pdki.svg"

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav>
      <div>
        <span>PDKI</span>
        <ul>
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
      </div>
    </nav>
  )
}

export default Navbar
