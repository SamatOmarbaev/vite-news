import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Skeleton } from "@mui/material"
import { CategoriesType } from "entities/Article/model/types/Article"
import { memo, useCallback } from "react"
import './CategorySwitch.css'

interface CategorySwitchProps {
  categories?: CategoriesType[]
  selectedCategory: string | null | undefined
  setSelectedCategory: (value: string) => void
  isLoading?: boolean
}

export const CategorySwitch = memo((props: CategorySwitchProps) => {
  const {categories, setSelectedCategory, selectedCategory, isLoading} = props

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  }, [setSelectedCategory])

  if (isLoading) {
    return (
      <div style={{marginLeft: '1rem'}}>
        <Skeleton variant="rounded" width={150} height={40} />
      </div>
    )
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" size="small">
        {'Category'}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCategory}
        label="Age"
        onChange={handleChange}
        size="small"
      >
        {categories?.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})
