import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StockContextProvider } from './Context/StockContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StockContextProvider>
      <App />

    </StockContextProvider>
  </StrictMode>,
)
