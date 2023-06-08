import { FC } from "react"
import Navigation from "../../components/navigation.tsx"

interface NewsProps {}

const News: FC<NewsProps> = () => {
  return (
    <>
      <Navigation />
      <h1>News</h1>
    </>
  )
}

export default News
