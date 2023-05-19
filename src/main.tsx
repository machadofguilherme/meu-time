import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import GlobalStyle from './GlobalStyle.ts'
import AppProvider from './context/AppProvider.tsx'

ReactDOM.createRoot(document
  .getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
)
