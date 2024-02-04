import { Button } from "antd"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import cls from './LanguageSwitcher.module.css'

export const LanguageSwitcher = memo(() => {
  const {t, i18n} = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button 
      onClick={toggleLang}
      type="link"
      className={cls.switch}
    >
      {t('Язык')}
    </Button>
  )
})
