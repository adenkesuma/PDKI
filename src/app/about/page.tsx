import { FC } from "react"
import Navigation from "../../components/navigation.tsx"

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <Navigation />
      <h1>About</h1>
    </>
  )
}

export default About
