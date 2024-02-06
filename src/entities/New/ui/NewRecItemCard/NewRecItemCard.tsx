import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { RoutePath } from "app/providers/router/ui/config"
import { News } from "entities/New"
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import cls from './NewRecItemCard.module.css'

interface NewRecItemProps {
  item: News
}

export const NewRecItemCard = memo(({item}: NewRecItemProps) => {
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.news_details + item.id)
  }, [navigate, item.id])

  return (
    <Card 
      sx={{ display: 'flex' }} 
      onClick={onOpenArticle} 
      className={cls.card}
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: 151 }}
        image={item.image}
        alt={item.author}
        className={cls.image}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h2" variant="h6" className={cls.title}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p" className={cls.paragraph}>
            {item.author}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
})
