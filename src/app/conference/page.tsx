import { FC } from "react"
import Navigation from "../../components/navigation.tsx"

interface ConferenceProps {}

const Conference: FC<ConferenceProps> = () => {
  return (
    <>
      <Navigation />
      <h1>ConferenceM</h1>
    </>
  )
}

export default Conference
