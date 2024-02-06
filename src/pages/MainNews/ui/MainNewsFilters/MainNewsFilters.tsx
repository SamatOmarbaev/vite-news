import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { newsSliceActions } from "entities/New"
import { CategorySwitch } from "features/category"
import { Search } from "features/search"

export const MainNewsFilters = () => {
  const dispatch = useAppDispatch()

  return (
    <section style={{display: 'flex', alignItems: 'center'}}>
      <Search
        setKeywords={(keywords) => dispatch(newsSliceActions.setFilters({key: 'keywords', value: keywords}))}
      />
      <CategorySwitch 
        setSelectedCategory={(category) => dispatch(newsSliceActions.setFilters({key: 'category', value: category}))} 
      />
    </section>
  )
}
