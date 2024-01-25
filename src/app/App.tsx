import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

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
