import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { News } from "../../model/types/New"
import { memo } from "react"
import cls from './NewRecItemCard.module.css'

interface NewRecItemProps {
  item: News
  onClick?: (news: News) => void
}

export const NewRecItemCard = memo(({item, onClick}: NewRecItemProps) => {
  return (
    <Card 
      sx={{ display: 'flex' }} 
      onClick={() => onClick ? onClick(item) : null} 
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
