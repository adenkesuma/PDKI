import { FC } from "react";
import Navigation from "@/components/navigation";

interface NewsProps {}

const News: FC<NewsProps> = () => {
  return (
    <>
      <Navigation />
      <h1>Testing News</h1>
      </>
  )
}

export default News
