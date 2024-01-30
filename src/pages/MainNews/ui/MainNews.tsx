import { ArticleList } from "entities/Article"
import { useEffect, useState } from "react"
import {getNews} from 'shared/api/apiNews'
import { PaginationWrapper } from "shared/ui/PaginationWrapper"

const MainNews = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = 10
  const pageSize = 10

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true)
      const response = await getNews(currentPage, pageSize)

      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  return (
    <div>
      <ArticleList items={news} isLoading={isLoading} />
      <PaginationWrapper totalPage={totalPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default MainNews