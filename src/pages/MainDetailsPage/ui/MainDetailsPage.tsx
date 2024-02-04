import { Button } from "@mui/material"
import { memo } from "react"
import { useNavigate } from "react-router-dom"
import './MainDetailsPage.css'
import { useTranslation } from "react-i18next"
import { NewDetails } from "entities/New"

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
      <NewDetails />
    </div>
  )
})

export default MainDateilsPage