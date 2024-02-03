import { CSSProperties, memo } from 'react';
import { Article } from '../../model/types/Article';
import { RecItemSkeleton } from '../RecItemCard/RecItemSkeleton';
import { RecItemCard } from '../RecItemCard/RecItemCard';

interface ArticleListProps {
  items?: Article[];
  isLoading?: boolean;
}

const stylesList: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr))',
  justifyItems: 'center',
  gap: '2rem 1rem',
  overflowY: 'scroll',
  maxHeight: 'calc(100vh - var(--navbar-height)',
  padding: '2rem 1rem',
}

const getSkeletons = () => (
  new Array(12)
    .fill(0)
    .map((_, index) => (
      <RecItemSkeleton key={index} />
    ))
);

export const RecList = memo(({items, isLoading}: ArticleListProps) => {
  const renderArticles = (item: Article) => (
    <RecItemCard item={item} key={item.id} />
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
      {items!.length > 0
        ?   items?.map(renderArticles)
        :   null}
    </ul>
  )
})
