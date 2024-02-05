import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Skeleton } from "@mui/material"
import { memo, useCallback } from "react"
import './CategorySwitch.css'
import { CategoriesType } from "entities/category"

interface CategorySwitchProps {
  categories?: CategoriesType[]
  selectedCategory: CategoriesType | undefined
  setSelectedCategory: (value: CategoriesType | null) => void
  isLoading?: boolean
}

export const CategorySwitch = memo((props: CategorySwitchProps) => {
  const {categories, setSelectedCategory, selectedCategory, isLoading} = props

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as CategoriesType);
  }, [setSelectedCategory])

  if (isLoading) {
    return (
      <div className={'skeletWrapper'}>
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
