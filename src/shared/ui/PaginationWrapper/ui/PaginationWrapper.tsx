import { Pagination } from "@mui/material"
import { memo } from "react";
import './PaginationWrapper.css'

interface PaginationWrapperProps {
  totalPage: number;
  setCurrentPage: (num: number) => void
}

export const PaginationWrapper = memo(({totalPage, setCurrentPage}: PaginationWrapperProps) => {
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
