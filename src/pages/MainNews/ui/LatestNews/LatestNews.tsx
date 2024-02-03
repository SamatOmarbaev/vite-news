import { memo } from "react"
import { useFetch } from "shared/lib/hooks/useFetch"
import { getLatestNews } from "../../model/services/getLatestNews"
import { NewsApiResponse } from "pages/MainNews/model/types/NewsApiResponse"
import { RecList } from "entities/Article/ui/RecList/RecList"

const LatestNews = memo(() => {
  const {data, isLoading} = useFetch<NewsApiResponse, null>(getLatestNews)

  return (
    <section>
      <RecList items={data?.news} isLoading={isLoading} />
    </section>
  )
})

export default LatestNews
