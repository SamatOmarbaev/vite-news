import { memo } from "react"
import { AllNews } from "./AllNews/AllNews"
import LatestNews from "./LatestNews/LatestNews"
import cls from './MainNews.module.css'

const MainNews = memo(() => {
  return (
    <section className={cls.mainNews}>
      <AllNews />
      <LatestNews />
    </section>
  )
})

export default MainNews