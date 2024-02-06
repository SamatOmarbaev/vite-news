// import { News } from "../../model/types/New"
// import { useGetNewByIdQuery } from "entities/New"
import { memo } from "react"
// import { useParams } from "react-router-dom"

interface NewDetailsProps {
  id?: string
}

export const NewDetails = memo((props: NewDetailsProps) => {
  const { id } = props
  // const {id} = useParams()
  // const { data: newById } = useGetNewByIdQuery({ id })
  
  return (
    <div>
      {/* <h2>
        {newById?.title}
      </h2> */}
      {'Страница с id = ' + id}
    </div>
  )
})
