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
        filters={filters}
        changeFilter={changeFilter}
      />
      <MainNewsContent 
        changeFilter={changeFilter} 
        filters={filters} 
      />
    </>
  )
})

export default MainNews