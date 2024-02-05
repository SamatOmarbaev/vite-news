import { Pagination, Skeleton } from "@mui/material"
import { memo } from "react";
import './MyPagination.css'

interface MyPaginationProps {
  totalPage: number;
  setCurrentPage: (num: number) => void
  isLoading?: boolean
}

export const MyPagination = memo((props: MyPaginationProps) => {
  const {totalPage, setCurrentPage, isLoading} = props

  if (isLoading) {
    return (
      <div className={'skeletonWrapper'}>
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
        <Skeleton variant="rounded" width={30} height={'2rem'} />
      </div>
    )
  }

  return (
    <Pagination 
      className={'pagination'}
      count={totalPage} 
      variant="outlined" 
      shape="rounded" 
      color='primary'
      onChange={(_, num) => setCurrentPage(num)} 
    />
  )
})
