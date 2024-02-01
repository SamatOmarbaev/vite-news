import { Filters } from "pages/MainNews/model/types/NewsApiResponse"
import { useState } from "react"

export const useFilters = (initialFilters: Filters) => {
  const [filters, setFilters] = useState<Filters>(initialFilters)
    
  const changeFilter = (key: string, value: string | number | null) => {
    setFilters((prev) => {
      return {...prev, [key]: value}
    })
  }

  return {filters, changeFilter}
}