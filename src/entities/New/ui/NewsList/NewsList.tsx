import { memo } from 'react';
import { News } from '../../model/types/New';
import { NewListItem } from '../NewListItem/NewListItem';
import { NewListItemSkeleton } from '../NewListItem/NewListItemSkeleton';
import cls from './NewsList.module.css'

interface NewsListProps {
  items?: News[];
  isLoading?: boolean;
}

const getSkeletons = () => (
  new Array(6)
    .fill(0)
    .map((_, index) => (
      <NewListItemSkeleton key={index} />
    ))
);

export const NewsList = memo((props: NewsListProps) => {
  const {isLoading, items} = props

  const renderNews = (item: News) => (
    <NewListItem item={item} key={item.id} />
  )

  if (isLoading) {
    return (
      <ul className={cls.list}>
        {getSkeletons()}
      </ul>
    )
  }
  
  return (
    <ul className={cls.list}>
      {items!.length > 0
        ?   items?.map(renderNews)
        :   null}
    </ul>
  )
})
