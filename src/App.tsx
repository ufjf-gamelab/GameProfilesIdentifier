
import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import SelectGame from './Componentes/SelectGame/SelectGame.jsx'
import Resultado from './Componentes/Resultado/Resultado.js'
import { useState } from 'react'
import ResultApi from './Controlers/ResultGameApi.js'

function App() {
  const resultApi = new ResultApi()

  const [ação, setAção] = useState(resultApi.Inputs.ação)
  const [social, setSocial] = useState(resultApi.Inputs.social)
  const [maestria, setMaestria] = useState(resultApi.Inputs.maestria)
  const [conquista, setConquista] = useState(resultApi.Inputs.conquista)
  const [imersão, setImersão] = useState(resultApi.Inputs.imersão)
  const [criatividade, setCriatividade] = useState(resultApi.Inputs.criatividade)
  return (
    <div className='App'>
      <Header></Header>
      <main>
          <SelectGame ação={ação} setAção={setAção} 
                      social={social} setSocial={setSocial}
                      maestria={maestria} setMaestria={setMaestria}
                      conquista={conquista} setConquista={setConquista}
                      imersão={imersão} setImersão={setImersão}
                      criatividade={criatividade} setCriatividade={setCriatividade}
          />
          <Resultado  ação={ação}
                      social={social}
                      maestria={maestria}
                      conquista={conquista}
                      imersão={imersão}
                      criatividade={criatividade}

                      resultApi={resultApi}
          />          
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
