import { ArticleList } from "entities/Article"
import { TOTAL_PAGE } from "shared/const/constants"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"
import { useGetNewsQuery } from "../../model/services/getNews"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { newsSliceActions } from "pages/MainNews/model/slices/newsSlice"

export const MainNewsContent = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.news.filters)
  const debouncedKeyword = useDebounce(filters.keywords, 1000)

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyword
  })

  return (
    <section>
      <ArticleList items={data?.news} isLoading={isLoading} />
      <PaginationWrapper 
        totalPage={TOTAL_PAGE} 
        setCurrentPage={(page_number) => 
          dispatch(newsSliceActions.setFilters({key: 'page_number', value: page_number}))
        } 
      />
    </section>
  )
}
