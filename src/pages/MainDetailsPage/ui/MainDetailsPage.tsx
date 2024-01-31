import { Button } from "@mui/material"
import { ArticleDetails } from "entities/Article"
import { CSSProperties, memo } from "react"
import { useNavigate } from "react-router-dom"

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
}

const btnStyles: CSSProperties = {
  marginRight: 'auto'
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