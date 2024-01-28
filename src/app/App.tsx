import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader'


const contentStyle: React.CSSProperties = {
  color: 'var(--primary-color)',
  backgroundColor: 'var(--bg-color)',
  flexGrow: 1,
  width: '100%',
  overflowY: 'auto',
  padding: '1.25rem 2.5rem',
  height: 'calc(100vh - var(--navbar-height))'
};

function App() {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Layout style={{background: 'transparent', display: 'flex', flexDirection: 'inherit'}}>
          <Sidebar />
          <Content style={contentStyle}>
            <AppRouter />
          </Content>
        </Layout>
      </Suspense>
    </div>
  )
}

export default App
