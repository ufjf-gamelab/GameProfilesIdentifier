
import './GameCreator.css'
import Header from '../../Componentes/Header/Header.js'
import Footer from '../../Componentes/Footer/Footer.js'
import SelectGame from '../../Componentes/Legacy/SelectGame/SelectGame.js'
import Resultado from '../../Componentes/Results/Resultado.js'
import { useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi.js'

function Personas() {
  const resultApi = new ResultApi()

  const [ação, setAção] = useState(resultApi.Inputs.ação)
  const [social, setSocial] = useState(resultApi.Inputs.social)
  const [maestria, setMaestria] = useState(resultApi.Inputs.maestria)
  const [conquista, setConquista] = useState(resultApi.Inputs.conquista)
  const [imersão, setImersão] = useState(resultApi.Inputs.imersão)
  const [criatividade, setCriatividade] = useState(resultApi.Inputs.criatividade)
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