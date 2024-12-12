import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/clone" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
