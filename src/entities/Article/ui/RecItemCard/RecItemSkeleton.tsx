import { Skeleton, Stack } from "@mui/material"
import { memo } from "react"

export const RecItemSkeleton = memo(() => {
  return (
    <Stack>
      <Skeleton variant="rounded" width={400} height={125} />
    </Stack>
  )
})
