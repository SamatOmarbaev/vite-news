import { memo } from "react"
import { RecList } from "entities/Article/ui/RecList/RecList"
import { useGetLatestNewsQuery } from "../../model/services/getLatestNews"

const LatestNews = memo(() => {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section>
      <RecList items={data?.news} isLoading={isLoading} />
    </section>
  )
})

export default LatestNews
