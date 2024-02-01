import { ArticleList } from "entities/Article"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"
import { getNews } from "../model/services/getNews"
import { memo } from "react"
import { PAGE_SIZE, TOTAL_PAGE } from "shared/const/constants"
import { CategorySwitch } from "widgets/CategorySwitch"
import { getByCategories } from "../model/services/getByCategories"
import { SearchComponent } from "widgets/SearchComponent"
import { useDebounce } from "shared/lib/hooks/useDebounce"
import { useFetch } from "shared/lib/hooks/useFetch"
import { useFilters } from "shared/lib/hooks/useFilters"

const MainNews = memo(() => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  })

  const debouncedKeyword = useDebounce(filters.keywords, 1000)

  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyword
  })

  const {data: dataCategories} = useFetch(getByCategories)

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <SearchComponent
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter('keywords', keywords)}
          isLoading={isLoading}
        />
        <CategorySwitch 
          categories={dataCategories?.categories} 
          setSelectedCategory={(category) => changeFilter('category', category)} 
          selectedCategory={filters.category} 
          isLoading={isLoading}
        />
      </div>
      <div>
        <ArticleList items={data?.news} isLoading={isLoading} />
        <PaginationWrapper 
          totalPage={TOTAL_PAGE} 
          setCurrentPage={(pageNumber) => changeFilter('pageNumber', pageNumber)} 
        />
      </div>
    </>
  )
})

export default MainNews