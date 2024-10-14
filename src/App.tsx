
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import SelectGame from './Componentes/SelectGame/SelectGame.jsx'
import Resultado from './Componentes/Resultado/Resultado.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import resultApi from './Controlers/ResultGameApi.js'

function App() {
  const [ação, setAção] = useState(resultApi.Inputs.ação)
  return (
    <div className='App'>
      <Header></Header>
      
      <main>
          <SelectGame ação={ação} setAção={setAção}/>

          <Resultado></Resultado>          
       

      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
