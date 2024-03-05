import { News } from '../..'
import { memo } from "react"
import cls from './NewDetails.module.css'
import { Typography } from '@mui/material'
import { formatTimeAgo } from 'shared/lib/helpers/formatTimeAgo'

interface NewDetailsProps {
  news: News
}

export const NewDetails = memo((props: NewDetailsProps) => {
  const { news } = props
  
  return (
    <div className={cls.details}>
      <div className={cls.imageContainer}>
        <img src={news?.image} alt={news?.title} className={cls.image} />
      </div>
      <section className={cls.content}>
        <Typography className={cls.paragraph} variant="body2" color="text.secondary">
          {formatTimeAgo(news.published)} {'by'} {news?.author}
        </Typography>
        <h2 className={cls.title}>
          {news?.title}
        </h2>
        <p className={cls.description}>
          {news?.description} ({news?.language}) 
          <a href={news?.url} target="_blank" rel="noreferrer" className={cls.link}>read more...</a>
        </p>
        <ul>
          {news.category.map((category) => <button className={cls.category} key={news.id}>{category}</button>)}
        </ul>
      </section>
    </div>
  )
})
