import { Button } from "@mui/material"
import { ArticleDetails } from "entities/Article"
import { CSSProperties, memo } from "react"
import { useNavigate } from "react-router-dom"
import './MainDetailsPage.css'

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const btnStyles: CSSProperties = {
  marginRight: 'auto',
  border: '1px solid var(--primary-color-rgba)',
  color: 'var(--primary-color)',
  backgroundColor: 'var(--inverted-bg-color)'
}

const MainDateilsPage = memo(() => {
  const navigate = useNavigate()

  return (
    <div style={styles}>
      <Button 
        style={btnStyles} 
        variant="outlined" 
        onClick={() => navigate(-1)}
      >
        {('Назад')}
      </Button>
      <ArticleDetails />
    </div>
  )
})

export default MainDateilsPage