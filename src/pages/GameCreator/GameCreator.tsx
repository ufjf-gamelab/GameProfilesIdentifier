
import './GameCreator.css'
import Header from '../../Componentes/Header/Header.js'
import Footer from '../../Componentes/Footer/Footer.js'
import GameFeaturesPicker from '../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js'
import Resultado from '../../Componentes/Results/Resultado.js'
import { useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi.js'
import { GameFeatureProps } from '@/Controlers/Features/FeaturesData.js'

function GameCreator() {
  const resultApi = new ResultApi()
 
  const [ação, setAção] = useState(resultApi.Inputs.ação)
  const [social, setSocial] = useState(resultApi.Inputs.social)
  const [maestria, setMaestria] = useState(resultApi.Inputs.maestria)
  const [conquista, setConquista] = useState(resultApi.Inputs.conquista)
  const [imersão, setImersão] = useState(resultApi.Inputs.imersão)
  const [criatividade, setCriatividade] = useState(resultApi.Inputs.criatividade)

  const gameFeature:GameFeatureProps[] = [
    {textLabel:'Ação', textdescription:'Foco em destruição e excitação intensa.', setValue: setAção},
    {textLabel:'Social', textdescription:' Competição e interação em comunidade.', setValue: setSocial},
    {textLabel:'Maestria', textdescription:'Desafio e desenvolvimento de estratégias', setValue: setMaestria},
    {textLabel:'Conquista', textdescription:'Completar objetivos e obter poder.', setValue: setConquista},
    {textLabel:'Imersão', textdescription:'Exploração de fantasia e histórias profundas', setValue: setImersão},
    {textLabel:'Criatividade', textdescription:'Personalização e descoberta de novidades.', setValue: setCriatividade},
  ]
  return (
    <div className='GameCreatorCtn'>
      <Header></Header>
      
      <main>
            <aside className='DataInput'>
              <GameFeaturesPicker Features={gameFeature}/>
            </aside>
            <div className='Results'>
              <Resultado  
                        ação={ação}
                        social={social}
                        maestria={maestria}
                        conquista={conquista}
                        imersão={imersão}
                        criatividade={criatividade}
                        resultApi={resultApi}
            />    
            </div>
               
      </main>
      <Footer></Footer>
    </div>
  )
}

export default GameCreator
