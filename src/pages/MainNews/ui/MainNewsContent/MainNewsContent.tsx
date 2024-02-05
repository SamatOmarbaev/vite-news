import { TOTAL_PAGE } from "shared/const/constants"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { useGetNewsQuery } from "../../../../entities/New/model/services/getNews"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { NewsList, newsSliceActions } from "entities/New"
import { MyPagination } from "features/pagination"

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
      <NewsList items={data?.news} isLoading={isLoading} />
      <MyPagination 
        totalPage={TOTAL_PAGE} 
        setCurrentPage={(page_number) => 
          dispatch(newsSliceActions.setFilters({key: 'page_number', value: page_number}))
        } 
        isLoading={isLoading}
      />
    </section>
  )
}
