import { useState } from 'react'

import './SelectGame.css'
import './Slider.css'
function SelectGame() {
  const [count, setCount] = useState(0)

  return (
    <div className='GameSelectCtn'>
        <h2>Selecione o Tipo de Jogador pro seu jogo</h2>
            
        <section>
            <ul>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>Acrobat</label>
                </li>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>HTML</label>
                </li>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>HTML</label>
                </li>
            </ul>
            <ul>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>HTML</label>
                </li>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>HTML</label>
                </li>
                <li>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label htmlFor={"html"}>HTML</label>
                </li>
            </ul>
        </section>
      
                        
            <button>Start</button>

           


        
    </div>
  )
}

export default SelectGame
