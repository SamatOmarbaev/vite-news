import { ArticleList } from "entities/Article"
import { useCallback, useEffect, useState } from "react"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"
import { getNews } from "../model/services/getNews"
import { getByCategories } from "../model/services/getByCategories"
import { CategorySwitch } from "widgets/CategorySwitch"

const MainNews = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = 30
  const pageSize = 10

  const fetchNews = useCallback(async(currentPage: number) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory
      })

      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [selectedCategory]) 

  const fetchNewsByCategories = async () => {
    try {
      const response = await getByCategories()

      setCategories(response.categories);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchNewsByCategories()
  }, [])

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, fetchNews])

  return (
    <>
      <CategorySwitch 
        categories={categories} 
        setSelectedCategory={setSelectedCategory} 
        selectedCategory={selectedCategory} 
      />
      <div>
        <ArticleList items={news} isLoading={isLoading} />
        <PaginationWrapper totalPage={totalPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
}

export default MainNews