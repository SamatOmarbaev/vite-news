import { ArticleList } from "entities/Article"
import { getNews } from "../../model/services/getNews"
import { Filters, NewsApiResponse, ParamsType } from "../../model/types/NewsApiResponse"
import { TOTAL_PAGE } from "shared/const/constants"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { useFetch } from "shared/lib/hooks/useFetch"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"

interface MainNewsContentProps {
  changeFilter: (key: string, value: string | number | null) => void
  filters: Filters
}

export const MainNewsContent = (props: MainNewsContentProps) => {
  const {changeFilter, filters} = props

  const debouncedKeyword = useDebounce(filters.keywords, 1000)

  const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeyword
  })

  return (
    <section>
      <ArticleList items={data?.news} isLoading={isLoading} />
      <PaginationWrapper 
        totalPage={TOTAL_PAGE} 
        setCurrentPage={(page_number) => changeFilter('page_number', page_number)} 
      />
    </section>
  )
}
