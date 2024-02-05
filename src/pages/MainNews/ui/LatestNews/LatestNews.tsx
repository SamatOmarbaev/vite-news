import { memo } from "react"
import { NewRecList, useGetLatestNewsQuery } from "entities/New"

const LatestNews = memo(() => {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section>
      <NewRecList items={data?.news} isLoading={isLoading} />
    </section>
  )
})

export default LatestNews
