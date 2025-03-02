
import './GameCreator.css'
import Header from '../../Componentes/Header/Header.js'
import Footer from '../../Componentes/Footer/Footer.js'
import GameFeaturesPicker from '../../Componentes/gameFeaturesPicker/GameFeaturesPicker.js'
import Resultado from '../../Componentes/Results/Resultado.js'
import { useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi.js'
import { GameFeatureProps } from '@/Controlers/Features/FeaturesData.js'
type gameValues = {
  ação: number
  social: number
  maestria: number
  conquista: number
  imersão: number
  criatividade: number
}
function GameCreator() {
  const resultApi = new ResultApi()
  const [gameValues, setgameValues] = useState(resultApi.Inputs)
  function setGameValues(valor: keyof gameValues, acrescimo: number) {
    const novoEstadoValues = { ...gameValues }
    novoEstadoValues[valor] =  acrescimo
    setgameValues(novoEstadoValues)
  }

  const gameFeature:GameFeatureProps[] = [
    {textLabel:'Ação', textdescription:'Foco em destruição e excitação intensa.', setValue: (value: number) => setGameValues('ação', value)},
    {textLabel:'Social', textdescription:' Competição e interação em comunidade.', setValue: (value: number) => setGameValues('social', value)},
    {textLabel:'Maestria', textdescription:'Desafio e desenvolvimento de estratégias',  setValue: (value: number) => setGameValues('maestria', value)},
    {textLabel:'Conquista', textdescription:'Completar objetivos e obter poder.',  setValue: (value: number) => setGameValues('conquista', value)},
    {textLabel:'Imersão', textdescription:'Exploração de fantasia e histórias profundas', setValue: (value: number) => setGameValues('imersão', value)},
    {textLabel:'Criatividade', textdescription:'Personalização e descoberta de novidades.', setValue: (value: number) => setGameValues('criatividade', value)},
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
                        gameValues={gameValues}
                        resultApi={resultApi}
            />    
            </div>
               
      </main>
      <Footer></Footer>
    </div>
  )
}

export default GameCreator
