import { ArticleList } from "entities/Article"
import { PaginationWrapper } from "shared/ui/PaginationWrapper"
import { getNews } from "../model/services/getNews"
import { useCallback, useEffect, useState } from "react"
import { PAGE_SIZE, TOTAL_PAGE } from "shared/const/constants"
import { CategorySwitch } from "widgets/CategorySwitch"
import { getByCategories } from "../model/services/getByCategories"
import { SearchComponent } from "widgets/SearchComponent"
import { useDebounce } from "shared/lib/hooks/useDebounce"

const MainNews = () => {
  const [news, setNews] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(undefined)
  const [keywords, setKeywords] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const debouncedKeyword = useDebounce(keywords, 1500)

  const fetchNews = useCallback(async(currentPage: number) => {
    try {
      setIsLoading(true)
      const response = await getNews({
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category: selectedCategory,
        keywords: debouncedKeyword
      })

      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }, [selectedCategory, debouncedKeyword]) 

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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <SearchComponent
          keywords={keywords}
          setKeywords={setKeywords}
        />
        <CategorySwitch 
          categories={categories} 
          setSelectedCategory={setSelectedCategory} 
          selectedCategory={selectedCategory} 
        />
      </div>
      <div>
        <ArticleList items={news} isLoading={isLoading} />
        <PaginationWrapper totalPage={TOTAL_PAGE} setCurrentPage={setCurrentPage} />
      </div>
    </>
  )
}

export default MainNews