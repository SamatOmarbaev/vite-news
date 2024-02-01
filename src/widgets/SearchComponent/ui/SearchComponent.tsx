import { TextField } from '@mui/material';
import { CSSProperties, memo } from 'react';
import './SearchComponent.css'

const styles: CSSProperties = {
  width: '100%',
}

interface SearchComponentProps {
  keywords: string;
  setKeywords: (value: string) => void
}

export const SearchComponent = memo(({keywords, setKeywords}: SearchComponentProps) => {
  return (
    <TextField 
      id="outlined-basic" 
      label="Search" 
      variant="outlined" 
      size="small"
      style={styles}
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
    />
  )
})
