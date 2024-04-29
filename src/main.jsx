import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ApiProvider from './context/ApiContext.jsx'
import CarritoProvider from './context/CarritoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ApiProvider>
      <CarritoProvider>
      <App />
      </CarritoProvider>
    </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
