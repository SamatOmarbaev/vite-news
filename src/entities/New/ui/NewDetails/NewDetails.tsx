// import { useGetNewByIdQuery } from '../..';
import { useGetNewByIdQuery } from '../../model/services/getNewsById';
import { memo } from "react"

interface NewDetailsProps {
  id: number
}

export const NewDetails = memo((props: NewDetailsProps) => {
  const { id } = props
  const { data } = useGetNewByIdQuery(id);
  
  return (
    <div>
      <h2>
        {data?.title}
      </h2>
      {'Страница с id = ' + id}
    </div>
  )
})
