import { getByCategories } from "../../model/services/getByCategories"
import { CategoriesApiResponse, Filters } from "../../model/types/NewsApiResponse"
import { useFetch } from "shared/lib/hooks/useFetch"
import { CategorySwitch } from "widgets/CategorySwitch"
import { SearchComponent } from "widgets/SearchComponent"

interface MainNewsFiltersProps {
  filters: Filters
  changeFilter: (key: string, value: string | number | null) => void
}

export const MainNewsFilters = (props: MainNewsFiltersProps) => {
  const {filters, changeFilter} = props

  const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getByCategories)

  return (
    <section style={{display: 'flex', alignItems: 'center'}}>
      <SearchComponent
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
      <CategorySwitch 
        categories={dataCategories?.categories} 
        setSelectedCategory={(category) => changeFilter('category', category)} 
        selectedCategory={filters.category} 
      />
    </section>
  )
}
