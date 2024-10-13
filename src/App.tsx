import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import SelectGame from './Componentes/SelectGame/SelectGame.jsx'
import Resultado from './Componentes/Resultado/Resultado.js'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <Header></Header>
      
      <main>
        <SelectGame></SelectGame>
        <Resultado></Resultado>
   
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
