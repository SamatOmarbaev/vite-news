import { Skeleton, Stack } from "@mui/material"
import { memo } from "react"

export const NewListItemSkeleton = memo(() => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rounded" width={300} height={150} />
      <Skeleton variant="rounded" width={275} height={'2.25rem'} />
      <Skeleton variant="rounded" width={175} height={'1.25rem'} />
    </Stack>
  )
})
