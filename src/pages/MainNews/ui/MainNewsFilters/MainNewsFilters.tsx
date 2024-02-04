import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { useGetByCategoriesQuery } from "../../model/services/getByCategories"
import { CategorySwitch } from "widgets/CategorySwitch"
import { SearchComponent } from "widgets/SearchComponent"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { newsSliceActions } from "entities/New/model/slices/newsSlice"

export const MainNewsFilters = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(state => state.news.filters)
  const { data, isLoading } = useGetByCategoriesQuery(null)

  return (
    <section style={{display: 'flex', alignItems: 'center'}}>
      <SearchComponent
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
