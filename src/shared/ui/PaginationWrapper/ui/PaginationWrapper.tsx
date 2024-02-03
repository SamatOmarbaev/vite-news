import { Pagination } from "@mui/material"
import { CSSProperties, memo } from "react";
import './PaginationWrapper.css'

interface PaginationWrapperProps {
  totalPage: number;
  setCurrentPage: (num: number) => void
}

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem 0 0',
}

export const PaginationWrapper = memo(({totalPage, setCurrentPage}: PaginationWrapperProps) => {
  return (
    <Pagination 
      style={styles}
      count={totalPage} 
      variant="outlined" 
      shape="rounded" 
      color='primary'
      onChange={(_, num) => setCurrentPage(num)} 
    />
  )
})
