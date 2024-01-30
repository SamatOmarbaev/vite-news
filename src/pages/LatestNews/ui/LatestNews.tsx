import { ArticleList } from "entities/Article"
import { useEffect, useState } from "react"
import {getNews} from 'shared/api/apiNews'

const LatestNews = () => {
  const [news, setNews] = useState([])

  const fetchNews = async () => {
    try {
      const response = await getNews()

      setNews(response.news);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <div>
      <ArticleList items={news} />
    </div>
  )
}

export default LatestNews