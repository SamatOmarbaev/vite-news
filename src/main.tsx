import 'app/styles/index.css'
import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
