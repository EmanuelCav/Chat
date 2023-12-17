import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './app/components/header/header'

import Index from './app/routes/index.routes'
import Room from './app/routes/room.routes'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/room' element={<Room />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
