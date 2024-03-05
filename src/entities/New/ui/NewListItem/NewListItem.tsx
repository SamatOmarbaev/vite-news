import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { News } from "../../model/types/New"
import { ReactNode, memo } from "react"
import { formatTimeAgo } from "shared/lib/helpers/formatTimeAgo"
import cls from './NewListItem.module.css'

interface NewListItemProps {
  item: News
  onClick?: (news: News) => ReactNode
}

export const NewListItem = memo(({item, onClick}: NewListItemProps) => {
  return (
    <Card 
      className={cls.card} sx={{ maxWidth: 300 }} 
    >
      <CardActionArea>
        {item.image && <CardMedia
          component="img"
          height="125px"
          image={item.image}
          alt="Image"
          className={cls.image}
          sx={{maxHeight: '125px'}}
        />}
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h3" className={cls.title}>
            {item.title}
          </Typography>
          <Typography className={cls.paragraph} variant="body2" color="text.secondary">
            {formatTimeAgo(item.published)} {'by'} {item.author}
          </Typography>
          {onClick ? onClick(item) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
