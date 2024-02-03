import { MainNewsContent } from "../MainNewsContent/MainNewsContent"
import { MainNewsFilters } from "../MainNewsFilters/MainNewsFilters"
import { CSSProperties, memo } from "react"

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '1000px',
  flexGrow: '1'
}

export const AllNews = memo(() => {
  return (
    <section style={styles}>
      <MainNewsFilters />
      <MainNewsContent />
    </section>
  )
})
