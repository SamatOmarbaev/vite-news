import { getByCategories } from "pages/MainNews/model/services/getByCategories"
import { useFetch } from "shared/lib/hooks/useFetch"
import { CategorySwitch } from "widgets/CategorySwitch"
import { SearchComponent } from "widgets/SearchComponent"

interface MainNewsFiltersProps {
  keywords: string
  category?: string
  changeFilter: (v: string, g: string) => void
}

export const MainNewsFilters = (props: MainNewsFiltersProps) => {
  const {category, keywords, changeFilter} = props

  const {data: dataCategories} = useFetch(getByCategories)

  return (
    <section style={{display: 'flex', alignItems: 'center'}}>
      <SearchComponent
        keywords={keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
      <CategorySwitch 
        categories={dataCategories?.categories} 
        setSelectedCategory={(category) => changeFilter('category', category)} 
        selectedCategory={category} 
      />
    </section>
  )
}
