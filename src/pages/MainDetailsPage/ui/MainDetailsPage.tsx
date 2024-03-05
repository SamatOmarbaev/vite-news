import { Button } from "@mui/material"
import { memo } from "react"
import { useNavigate } from "react-router-dom"
import './MainDetailsPage.css'
import { useTranslation } from "react-i18next"
import { NewDetails } from "entities/New"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"
import { Result } from "antd"

const MainDateilsPage = memo(() => {
  const { t } = useTranslation()
  const currentNews = useAppSelector(state => state.news.currentNews)
  const navigate = useNavigate()

  if (!currentNews) {
    return (
      <Result
        status='404'
        title='404'
        subTitle={t('К сожалению, страница, которую вы посетили, не существует.')}
      />
    )
  }

  return (
    <div className={'main'}>
      <Button 
        className={'btn'} 
        variant="outlined" 
        onClick={() => navigate(-1)}
      >
        {t('Назад')}
      </Button>
      <NewDetails news={currentNews}/>
    </div>
  )
})

export default MainDateilsPage