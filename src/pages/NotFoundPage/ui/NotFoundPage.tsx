import { Button, Result } from "antd"
import { RoutePath } from "app/providers/router/ui/config"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import cls from './NotFoundPage.module.css'


export const NotFoundPage = memo(() => {
  const {t} = useTranslation()
  const navigate = useNavigate()

  return (
    <Result
      className={cls.Result}
      status='404'
      title='404'
      subTitle={t('К сожалению, страница, которую вы посетили, не существует.')}
      extra={
        <Button 
          type='primary'
          onClick={() => navigate(RoutePath.main)}
        >
          {t('Назад домой')}
        </Button>
      }
    />
  )
})
