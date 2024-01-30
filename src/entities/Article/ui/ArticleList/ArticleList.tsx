import { CSSProperties, memo } from 'react';
import { Article } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    items: Article[]
}

const stylesList: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  gap: '2rem'
}

export const ArticleList = memo(({items}: ArticleListProps) => {
  return (
    <ul style={stylesList}>
      {items.map((item) => (
        <ArticleListItem item={item} key={item.id} />
      ))}
    </ul>
  )
})
