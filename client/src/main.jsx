import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ContextProvider } from './context/Context.jsx'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthContextProvider>
)
