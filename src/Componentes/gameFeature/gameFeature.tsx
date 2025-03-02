
import './GameCreator.css'
import Header from '../../Componentes/Header/Header.js'
import Footer from '../../Componentes/Footer/Footer.js'
import SelectGame from '../../Componentes/Legacy/SelectGame/SelectGame.js'
import Resultado from '../../Componentes/Legacy/Resultado/Resultado.js'
import { useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi.js'


const estilo = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        gap: 0,
        borderRadius: '5px',
    } as React.CSSProperties,
    label: {
        width: '100%',
        margin: 0,
        padding: 0,
        display: 'flex',
        fontSize: 'medium',
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    } as React.CSSProperties
}
function GameCreator() {
  const resultApi = new ResultApi()

  return (
    <div className="InputDescription">

        <Slider
        
        //value={input.value}
        style={estilo.container}
        max={100}
        onValueChange={(valores:number[]) =>
            input.setValue(valores[0])
        }
        />
        <label
        style={estilo.label}>
        🛈 {input.label}: {input.description}
        </label>
    </div>
  )
}

export default GameCreator
