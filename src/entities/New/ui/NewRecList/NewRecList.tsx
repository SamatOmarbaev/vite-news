import { memo } from 'react';
import { News } from '../../model/types/New';
import { NewRecItemSkeleton } from '../NewRecItemCard/NewRecItemSkeleton';
import { NewRecItemCard } from '../NewRecItemCard/NewRecItemCard';
import cls from './NewRecList.module.css'
import { Virtuoso } from 'react-virtuoso';

interface NewRecListProps {
  items?: News[];
  isLoading?: boolean;
  onClick?: (news: News) => void;
}

export const NewRecList = memo((props: NewRecListProps) => {
  const {isLoading, items, onClick} = props

  const renderNewsRec = (item: News) => (
    <NewRecItemCard item={item} onClick={onClick} key={item.id} />
  )

  if (isLoading) {
    return (
      <Virtuoso
        className={cls.list}
        totalCount={12}
        itemContent={(index) => <NewRecItemSkeleton key={index} />}
      />
    )
  }
  
  return (
    <Virtuoso
      className={cls.list}
      totalCount={items?.length || 0}
      itemContent={(index) => renderNewsRec(items![index])}
    />
  )
})
