import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainContent from './content/MainContent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
