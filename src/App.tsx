
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ResultApi from './Controlers/QFoundryApi.js'
import GameCreator from './pages/GameCreator/GameCreator.js'

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameCreator />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
