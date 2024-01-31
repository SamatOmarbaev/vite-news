import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { CategoriesType } from "entities/Article/model/types/Article"
import { memo } from "react"
import './CategorySwitch.css'

interface CategorySwitchProps {
    categories: CategoriesType[]
    setSelectedCategory: (value: string) => void
    selectedCategory: string
}

export const CategorySwitch = memo(({categories, setSelectedCategory, selectedCategory}: CategorySwitchProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {'Category'}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCategory}
        label="Age"
        onChange={handleChange}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})
