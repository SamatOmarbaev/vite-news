import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Article } from "../../model/types/Article"
import { CSSProperties, memo } from "react"
import { formatTimeAgo } from "shared/lib/helpers/formatTimeAgo"

interface ArticleListItemProps {
    item: Article
}

const styleCard: CSSProperties = {
  background: 'var(--inverted-bg-color)',
  width: '300px',
  border: '1px solid var(--inverted-bg-color)',
  height: '100%',
  color: 'var(--primary-color)'
}

const styleH2: CSSProperties = {
  overflow: 'hidden',
  'WebkitLineClamp': '2',
  'WebkitBoxOrient': 'vertical',
  display: '-webkit-box',
}

const styleP: CSSProperties = {
  color: 'var(--secondary-color)',
  overflow: 'hidden',
  'WebkitLineClamp': '1',
  'WebkitBoxOrient': 'vertical',
  display: '-webkit-box',
}

export const ArticleListItem = memo(({item}: ArticleListItemProps) => {
  return (
    <Card style={styleCard} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {item.image && <CardMedia
          component="img"
          height="160"
          image={item.image}
          alt={item.title}
        />}
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2" style={styleH2}>
            {item.title}
          </Typography>
          <Typography style={styleP} variant="body2" color="text.secondary">
            {/* eslint-disable-next-line i18next/no-literal-string */}
            {formatTimeAgo(item.published)} by {item.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
