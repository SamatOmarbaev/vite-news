import { Button } from "@mui/material"
import { ArticleDetails } from "entities/Article"
import { memo } from "react"
import { useNavigate } from "react-router-dom"
import './MainDetailsPage.css'
import { useTranslation } from "react-i18next"

const MainDateilsPage = memo(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={'main'}>
      <Button 
        className={'btn'} 
        variant="outlined" 
        onClick={() => navigate(-1)}
      >
        {t('Назад')}
      </Button>
      <ArticleDetails />
    </div>
  )
})

export default MainDateilsPage