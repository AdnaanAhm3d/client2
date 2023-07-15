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
import './hero.css'
import './navbar.css'
import './project.css'
import './aboutme.css'
import './contact.css'
import './singlepage.css'
import './loader2.css'
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
