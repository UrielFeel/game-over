import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Games from './components/Games/Games'
import GameDetail from './components/GameDetail/GameDetail'
import Upload from './components/UploadGame/Upload'
import React from 'react'
import NotFound404 from './components/NotFound404/NotFound404'

function App () {
  return (
    <div className="App">

      <NavBar />

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="games" element={<Games />} />
        <Route path="/:id" element={<GameDetail />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound404 />} />

      </Routes>

    </div>
  )
}

export default App
