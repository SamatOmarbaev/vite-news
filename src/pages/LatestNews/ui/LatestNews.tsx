import { ArticleList } from "entities/Article"
import { useEffect, useState } from "react"
import {getNews} from 'shared/api/apiNews'

const LatestNews = () => {
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchNews = async () => {
    try {
      setIsLoading(true)
      const response = await getNews()

      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div>
      <ArticleList items={news} isLoading={isLoading} />
    </div>
  )
}

export default LatestNews