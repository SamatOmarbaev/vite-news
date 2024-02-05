import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { newsSliceActions } from "entities/New"
import { useGetByCategoriesQuery } from "entities/category"
import { CategorySwitch } from "features/category"
import { Search } from "features/search"

export const MainNewsFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.news.filters)
  const { data, isLoading } = useGetByCategoriesQuery(null)

  return (
    <section style={{display: 'flex', alignItems: 'center'}}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(newsSliceActions.setFilters({key: 'keywords', value: keywords}))}
        isLoading={isLoading}
      />
      <CategorySwitch 
        categories={data?.categories} 
        setSelectedCategory={(category) => dispatch(newsSliceActions.setFilters({key: 'category', value: category}))} 
        selectedCategory={filters.category} 
        isLoading={isLoading}
      />
    </section>
  )
}
