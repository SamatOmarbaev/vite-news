import { CSSProperties, memo } from "react"
import { AllNews } from "./AllNews/AllNews"
import LatestNews from "./LatestNews/LatestNews"

const styles: CSSProperties = {
  display: 'flex',
  gap: '2rem'
}

const MainNews = memo(() => {
  return (
    <section style={styles}>
      <AllNews />
      <LatestNews />
    </section>
  )
})

export default MainNews