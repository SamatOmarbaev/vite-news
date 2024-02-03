import { useFilters } from "shared/lib/hooks/useFilters"
import { MainNewsContent } from "../MainNewsContent/MainNewsContent"
import { MainNewsFilters } from "../MainNewsFilters/MainNewsFilters"
import { PAGE_SIZE } from "shared/const/constants"
import { CSSProperties, memo } from "react"

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '1000px',
  flexGrow: '1'
}

export const AllNews = memo(() => {
  const {filters, changeFilter} = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: undefined,
    keywords: ''
  })

  return (
    <section style={styles}>
      <MainNewsFilters 
        filters={filters}
        changeFilter={changeFilter}
      />
      <MainNewsContent 
        changeFilter={changeFilter} 
        filters={filters} 
      />
    </section>
  )
})
