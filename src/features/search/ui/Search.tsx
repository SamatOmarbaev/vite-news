import { Skeleton, TextField } from '@mui/material';
import { memo } from 'react';
import './Search.css'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useGetByCategoriesQuery } from 'entities/category';

interface SearchProps {
  setKeywords: (value: string) => void
}

export const Search = memo((props: SearchProps) => {
  const { setKeywords} = props
  const filters = useAppSelector(state => state.news.filters)
  const { isLoading } = useGetByCategoriesQuery(null)

  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={'100%'} height={40} />
    )
  }
  
  return (
    <TextField 
      id="outlined-basic" 
      label="Search" 
      variant="outlined" 
      size="small"
      className='search'
      value={filters.keywords}
      onChange={(e) => setKeywords(e.target.value)}
    />
  )
})
