import { ArticleList } from "entities/Article"
import { memo } from "react"
import { useFetch } from "shared/lib/hooks/useFetch"
import { getLatestNews } from "../model/services/getLatestNews"

const LatestNews = memo(() => {
  const {data, isLoading} = useFetch(getLatestNews)

  return (
    <div>
      <ArticleList items={data?.news} isLoading={isLoading} />
    </div>
  )
})

export default LatestNews
