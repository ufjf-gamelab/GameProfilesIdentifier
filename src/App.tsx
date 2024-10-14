import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import SelectGame from './Componentes/SelectGame/SelectGame.jsx'
import Resultado from './Componentes/Resultado/Resultado.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Header></Header>
      
      <main>
      <BrowserRouter>
      <Routes>
          <Route path="/result" element= {        <Resultado></Resultado>          }/>
          <Route path="/" element={<SelectGame />} />
        </Routes>
   
        </BrowserRouter>
         
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
