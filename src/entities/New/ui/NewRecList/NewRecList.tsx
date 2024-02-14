// import { UIEvent, memo, useEffect, useRef } from 'react';
import { memo } from 'react';
import { News } from '../../model/types/New';
import { NewRecItemSkeleton } from '../NewRecItemCard/NewRecItemSkeleton';
import { NewRecItemCard } from '../NewRecItemCard/NewRecItemCard';
import cls from './NewRecList.module.css'
// import { useThrottle } from 'shared/lib/hooks/useThrottle';
// import { uiSliceActions } from 'features/ui';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface NewRecListProps {
  items?: News[];
  isLoading?: boolean;
}

const getSkeletons = () => (
  new Array(12)
    .fill(0)
    .map((_, index) => (
      <NewRecItemSkeleton key={index} />
    ))
);

export const NewRecList = memo((props: NewRecListProps) => {
  const {isLoading, items} = props
  // const dispatch = useAppDispatch()
  // const listRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   // Сохранение позиции скролла
  //   if (listRef.current) {
  //     const scrollTop = listRef.current.scrollTop;
  //     localStorage.setItem('scrollPosition', scrollTop.toString());
  //   }
  // }, [items]);

  const renderNewsRec = (item: News) => (
    <NewRecItemCard item={item} key={item.id} />
  )

  // const onScrool = useThrottle((e: UIEvent<HTMLUListElement>) => {
  //   dispatch(uiSliceActions.setScrollPosition({
  //     position: e.currentTarget.scrollTop,
  //     path: location.pathname,
  //   }));
  //   console.log('scroll', listRef.current?.scrollTop);
  // }, 500)

  // useEffect(() => {
  //   // Восстановление позиции скролла
  //   if (listRef.current) {
  //     const savedScrollPosition = localStorage.getItem('scrollPosition');
  //     if (savedScrollPosition) {
  //       listRef.current.scrollTop = parseInt(savedScrollPosition);
  //     }
  //   }
  // }, []);

  if (isLoading) {
    return (
      // <ul className={cls.list} ref={listRef}>
      <ul className={cls.list}>
        {getSkeletons()}
      </ul>
    )
  }
  
  return (
    // <ul className={cls.list} ref={listRef} onScroll={onScrool}>
    <ul className={cls.list}>
      {items!.length > 0
        ?   items?.map(renderNewsRec)
        :   null}
    </ul>
  )
})
