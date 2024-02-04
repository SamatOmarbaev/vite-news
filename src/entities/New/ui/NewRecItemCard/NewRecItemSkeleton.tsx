import { Skeleton, Stack } from "@mui/material"
import { memo } from "react"

export const NewRecItemSkeleton = memo(() => {
  return (
    <Stack>
      <Skeleton variant="rounded" width={400} height={125} />
    </Stack>
  )
})
