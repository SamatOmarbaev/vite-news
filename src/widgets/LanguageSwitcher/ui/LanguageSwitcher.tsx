import { Button } from "antd"
import { CSSProperties, memo } from "react"
import { useTranslation } from "react-i18next"

const styles: CSSProperties = {
  padding: '0px',
  marginRight: '10px',
  color: 'var(--secondary-color)'
}

export const LanguageSwitcher = memo(() => {
  const {t, i18n} = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button 
      style={styles} 
      onClick={toggleLang}
      type="link"
    >
      {t('Язык')}
    </Button>
  )
})
