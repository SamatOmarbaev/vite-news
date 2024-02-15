import { Skeleton, Stack } from "@mui/material"
import { memo } from "react"
import cls from './NewRecItemCard.module.css'

export const NewRecItemSkeleton = memo(() => {
  return (
    <Stack>
      <Skeleton className={cls.skeleton} variant="rounded" width={400} height={125} />
    </Stack>
  )
})
