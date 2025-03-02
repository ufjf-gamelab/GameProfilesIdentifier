
import './GameCreator.css'
import Header from '../../Componentes/Header/Header.js'
import Footer from '../../Componentes/Footer/Footer.js'
import SelectGame from '../../Componentes/Legacy/SelectGame/SelectGame.js'
import Resultado from '../../Componentes/Resultado/Resultado.js'
import { useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi.js'

function Personas() {
  const resultApi = new ResultApi()

  
  return (
    <div className='PersonasCtn'>
      <Header></Header>
      <main>
            
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Personas