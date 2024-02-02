import { ArticleList } from "entities/Article"
import { getNews } from "../../model/services/getNews"
import { Filters } from "../../model/types/NewsApiResponse"
import { CSSProperties } from "react"
import { TOTAL_PAGE } from "shared/const/constants"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { useFetch } from "shared/lib/hooks/useFetch"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"

interface MainNewsContentProps {
    changeFilter: (v: string, t: string | number) => void
    keywords: string
    filters: Filters
}

const styles: CSSProperties = {
  maxWidth: '1000px'
}

export const MainNewsContent = (props: MainNewsContentProps) => {
  const {changeFilter, keywords, filters} = props

  const debouncedKeyword = useDebounce(keywords, 1000)

  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyword
  })

  return (
    <section style={styles}>
      <ArticleList items={data?.news} isLoading={isLoading} />
      <PaginationWrapper 
        totalPage={TOTAL_PAGE} 
        setCurrentPage={(pageNumber) => changeFilter('pageNumber', pageNumber)} 
      />
    </section>
  )
}
