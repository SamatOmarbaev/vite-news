import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Skeleton } from "@mui/material"
import { memo, useCallback } from "react"
import './CategorySwitch.css'
import { CategoriesType, useGetByCategoriesQuery } from "entities/category"
import { useAppSelector } from "shared/lib/hooks/useAppSelector"

interface CategorySwitchProps {
  setSelectedCategory: (value: CategoriesType | null) => void
}

export const CategorySwitch = memo((props: CategorySwitchProps) => {
  const {setSelectedCategory} = props
  const filters = useAppSelector(state => state.news.filters)

  const { data, isLoading } = useGetByCategoriesQuery(null)

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
        value={filters.category}
        label="Age"
        onChange={handleChange}
        size="small"
      >
        {data?.categories?.map((category) => (
          <MenuItem key={category} value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})
