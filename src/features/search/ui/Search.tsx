import { Skeleton, TextField } from '@mui/material';
import { memo } from 'react';
import './Search.css'

interface SearchProps {
  keywords: string;
  setKeywords: (value: string) => void
  isLoading?: boolean;
}

export const Search = memo((props: SearchProps) => {
  const {keywords, setKeywords, isLoading} = props

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
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
    />
  )
})
