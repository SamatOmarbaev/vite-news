import { Skeleton, Stack } from "@mui/material"
import { memo } from "react"

export const ArticleListItemSkeleton = memo(() => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={300} height={160} />
      <Skeleton variant="rounded" width={275} height={'2rem'} />
      <Skeleton variant="rounded" width={150} height={'1rem'} />
    </Stack>
  )
})
