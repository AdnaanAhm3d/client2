import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Switch,
  createBrowserRouter,
} from 'react-router-dom'
import './index.css'
import App from './App'

import DefaultContextProvider from './Contexts/DefaultContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DefaultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DefaultContextProvider>
  </React.StrictMode>
)
