
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ResultApi from './Controlers/ResultGameApi.js'
import GameCreator from './pages/GameCreator/GameCreator.js'

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameCreator />}>
        
        </Route>
        <Route path="/Personas" element={<GameCreator />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
