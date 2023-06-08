import { FC } from "react"
import Navigation from "../../components/navigation.tsx"

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = () => {
  return (
    <>
      <Navigation />
      <h1>Newsletter</h1>
    </>
  )
}

export default Newsletter
