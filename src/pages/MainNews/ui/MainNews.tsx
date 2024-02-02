import { memo } from "react"
import { PAGE_SIZE } from "shared/const/constants"
import { useFilters } from "shared/lib/hooks/useFilters"
import { MainNewsFilters } from "./MainNewsFilters/MainNewsFilters"
import { MainNewsContent } from "./MainNewsContent/MainNewsContent"

const MainNews = memo(() => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: undefined,
    keywords: ''
  })

  return (
    <>
      <MainNewsFilters 
        keywords={filters.keywords}
        category={filters.category}
        changeFilter={changeFilter}
      />
      <MainNewsContent 
        changeFilter={changeFilter} 
        filters={filters} 
        keywords={filters.keywords}
      />
    </>
  )
})

export default MainNews