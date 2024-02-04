import { MainNewsContent } from "../MainNewsContent/MainNewsContent"
import { MainNewsFilters } from "../MainNewsFilters/MainNewsFilters"
import { memo } from "react"
import cls from './AllNews.module.css'

export const AllNews = memo(() => {
  return (
    <section className={cls.news}>
      <MainNewsFilters />
      <MainNewsContent />
    </section>
  )
})
