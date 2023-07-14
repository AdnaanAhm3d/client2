import { BrowserRouter, Routes } from 'react-router-dom'

import { Route } from 'react-router-dom'
import Aboutme from './Components/Aboutme'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Project from './Components/Project'
import SinglePage from './Components/SinglePage'
import { lazy, Suspense } from 'react'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/letsconnect' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/microsoftmigration' element={<SinglePage />} />
      </Routes>
    </>
  )
}

export default App
