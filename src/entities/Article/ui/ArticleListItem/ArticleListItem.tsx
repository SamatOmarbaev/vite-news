import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Article } from "../../model/types/Article"
import { CSSProperties, memo } from "react"
import { formatTimeAgo } from "shared/lib/helpers/formatTimeAgo"
// import { useNavigate } from "react-router-dom"
// import { RoutePath } from "app/providers/router/ui/config"

interface ArticleListItemProps {
  item: Article
}

const styleCard: CSSProperties = {
  background: 'var(--inverted-bg-color)',
  width: '300px',
  border: '1px solid var(--inverted-bg-color)',
  height: '250px',
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

const styleImg: CSSProperties = {
  backgroundColor: 'var(--card-bg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const ArticleListItem = memo(({item}: ArticleListItemProps) => {
  // const navigate = useNavigate()

  // const onOpenArticle = useCallback(() => {
  //   navigate(RoutePath.news_details + item.id)
  // }, [navigate, item.id])

  return (
    <Card 
      style={styleCard} sx={{ maxWidth: 300 }} 
      // onClick={onOpenArticle}
    >
      <CardActionArea>
        {item.image && <CardMedia
          component="img"
          height="125"
          image={item.image}
          alt="Image"
          style={styleImg}
        />}
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h2" style={styleH2}>
            {item.title}
          </Typography>
          <Typography style={styleP} variant="body2" color="text.secondary">
            {formatTimeAgo(item.published)} {'by'} {item.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})
