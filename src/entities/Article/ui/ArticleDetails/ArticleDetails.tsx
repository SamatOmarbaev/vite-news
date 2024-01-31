// import { Article } from "../../model/types/Article"
import { memo } from "react"
import './ArticleDetails.css'
import { useParams } from "react-router-dom"

// interface ArticleDetailsProps {
//   item?: Article
// }

// export const ArticleDetails = memo((props: ArticleDetailsProps) => {
export const ArticleDetails = memo(() => {
  // const {item} = props
  const {id} = useParams()
  
  return (
    <div>
      {'Страница с id = ' + id}
    </div>
  )
})
