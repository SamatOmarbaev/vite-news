import { memo } from "react"
import { NewRecList, News, newsSliceActions, useGetLatestNewsQuery } from "entities/New"
import { RoutePath } from "app/providers/router/ui/config"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"

const LatestNews = memo(() => {
  const { data, isLoading } = useGetLatestNewsQuery(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const moreView = (news: News) => {
    dispatch(newsSliceActions.setCurrentNews(news))
    navigate(RoutePath.news + news.id)
  }

  return (
    <section>
      <NewRecList 
        items={data?.news} 
        isLoading={isLoading} 
        onClick={(news: News) => moreView(news)}
      />
    </section>
  )
})

export default LatestNews
