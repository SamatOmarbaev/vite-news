import { memo } from 'react';
import { News } from '../../model/types/New';
import { NewRecItemSkeleton } from '../NewRecItemCard/NewRecItemSkeleton';
import { NewRecItemCard } from '../NewRecItemCard/NewRecItemCard';
import cls from './NewRecList.module.css'
import { Virtuoso } from 'react-virtuoso';

interface NewRecListProps {
  items?: News[];
  isLoading?: boolean;
}

// const getSkeletons = () => (
//   new Array(12)
//     .fill(0)
//     .map((_, index) => (
//       <NewRecItemSkeleton key={index} />
//     ))
// );

export const NewRecList = memo((props: NewRecListProps) => {
  const {isLoading, items} = props

  const renderNewsRec = (item: News) => (
    <NewRecItemCard item={item} key={item.id} />
  )

  if (isLoading) {
    return (
      // <ul className={cls.list}>
      //   {getSkeletons()}
      // </ul>
      <Virtuoso
        className={cls.list}
        totalCount={12}
        itemContent={(index) => <NewRecItemSkeleton key={index} />}
      />
    )
  }
  
  return (
    // <ul className={cls.list}>
    //   {items!.length > 0
    //     ?   items?.map(renderNewsRec)
    //     :   null}
    // </ul>
    <Virtuoso
      className={cls.list}
      totalCount={items?.length || 0}
      itemContent={(index) => renderNewsRec(items![index])}
    />
  )
})
