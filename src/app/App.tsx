import { Route, Routes } from 'react-router-dom'
import { AboutPageAsync as AboutPage } from '../pages/AboutPage/AboutPage.async'
import { MainPageAsync as MainPage } from '../pages/MainPage/MainPage.async'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from '../theme/useTheme'



function App() {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>theme</button>
      <Link to={'/'}>
        Main
      </Link>
      <Link to={'/about'}>
        About
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
