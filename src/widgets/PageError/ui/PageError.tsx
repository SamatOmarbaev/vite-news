import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';

export const PageError = () => {
  const {t} = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <Result
      status="500"
      title="500"
      subTitle={t('Извините, что-то пошло не так.')}
      extra={
        <Button 
          type="primary"
          onClick={reloadPage}
        >
          {t('Обновить страницу')}
        </Button>
      }
    />
  )
}
