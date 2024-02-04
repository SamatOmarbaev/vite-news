import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <Suspense fallback=''>
        <Navbar />
        <Layout style={{background: 'transparent', display: 'flex', flexDirection: 'inherit'}}>
          <Content className={'mainContent'}>
            <AppRouter />
          </Content>
        </Layout>
      </Suspense>
    </>
  )
}

export default App
