import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
// import { RoutePath } from "app/providers/router/ui/config"
import { Article } from "entities/Article"
import { CSSProperties, memo } from "react"
// import { useNavigate } from "react-router-dom"

interface RecItemProps {
  item: Article
}
  
const styleCard: CSSProperties = {
  background: 'var(--inverted-bg-color)',
  width: '400px',
  border: '1px solid var(--inverted-bg-color)',
  height: '125px',
  color: 'var(--primary-color)',
  cursor: 'pointer'
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
  alignItems: 'center',
  minWidth: '150px',
  flexGrow: 1
}

export const RecItemCard = memo(({item}: RecItemProps) => {
  // const navigate = useNavigate()

  // const onOpenArticle = useCallback(() => {
  //   navigate(RoutePath.news_details + item.id)
  // }, [navigate, item.id])

  return (
    <Card 
      sx={{ display: 'flex' }} 
      // onClick={onOpenArticle} 
      style={styleCard}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt={item.author}
        style={styleImg}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" style={styleH2}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={styleP}>
            {item.author}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
})
