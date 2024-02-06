import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { News } from "../../model/types/New"
import { memo, useCallback } from "react"
import { formatTimeAgo } from "shared/lib/helpers/formatTimeAgo"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "app/providers/router/ui/config"
import cls from './NewListItem.module.css'

interface NewListItemProps {
  item: News
}

export const NewListItem = memo(({item}: NewListItemProps) => {
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.news_details + item.id)
  }, [navigate, item.id])

  return (
    <Card 
      className={cls.card} sx={{ maxWidth: 300 }} 
      onClick={onOpenArticle}
    >
      <CardActionArea>
        {item.image && <CardMedia
          component="img"
          height="135px"
          image={item.image}
          alt="Image"
          className={cls.image}
          sx={{maxHeight: '135px'}}
        />}
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2" className={cls.title}>
            {item.title}
          </Typography>
          <Typography className={cls.paragraph} variant="body2" color="text.secondary">
            {formatTimeAgo(item.published)} {'by'} {item.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
