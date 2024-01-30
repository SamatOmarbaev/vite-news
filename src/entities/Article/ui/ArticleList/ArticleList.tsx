import { CSSProperties, memo } from 'react';
import { Article } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    items: Article[];
    isLoading?: boolean;
}

const stylesList: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  gap: '2rem'
}

const getSkeletons = () => (
  new Array(9)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton key={index} />
    ))
);

export const ArticleList = memo(({items, isLoading}: ArticleListProps) => {
  const renderArticles = (item: Article) => (
    <ArticleListItem item={item} key={item.id} />
  )

  if (isLoading) {
    return (
      <ul style={stylesList}>
        {getSkeletons()}
      </ul>
    )
  }
  
  return (
    <ul style={stylesList}>
      {items.length > 0
        ?   items.map(renderArticles)
        :   null}
    </ul>
  )
})
