import { TOTAL_PAGE } from "shared/const/constants"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { useGetNewsQuery } from "../../../../entities/New/model/services/getNews"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { News, NewsList, newsSliceActions } from "entities/New"
import { MyPagination } from "features/pagination"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "app/providers/router/ui/config"
import { Button } from "@mui/material"

export const MainNewsContent = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.news.filters)
  const debouncedKeyword = useDebounce(filters.keywords, 1000)
  const navigate = useNavigate()

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyword
  })

  const moreView = (news: News) => {
    dispatch(newsSliceActions.setCurrentNews(news))
    navigate(RoutePath.news + news.id)
  }

  return (
    <section>
      <NewsList 
        items={data?.news} 
        isLoading={isLoading} 
        onClick={(news: News) => <Button 
          size="small" 
          variant="outlined" 
          onClick={() => moreView(news)}>
          {('more')}
        </Button>
        }
      />
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
