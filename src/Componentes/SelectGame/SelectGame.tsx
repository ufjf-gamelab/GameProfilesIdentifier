import { useState } from 'react'
import selectGameAPI from '../../Controlers/SelectGameApi'
import './SelectGame.css'
import './Slider.css'
function SelectGame() {
    const [range1, setRange1] = useState(0)
    const [range2, setRange2] = useState(0)
    const [range3, setRange3] = useState(0)
    const [range4, setRange4] = useState(0)
    const [range5, setRange5] = useState(0)
    
    function handleChange(event: any, setRange1: any) {
        setRange1(event.target.value)

        
    }
    selectGameAPI.arquetipos.tipo1 = range1;
    selectGameAPI.arquetipos.tipo2 = range2;
    selectGameAPI.arquetipos.tipo3 = range3;
    selectGameAPI.arquetipos.tipo4 = range4;
    selectGameAPI.arquetipos.tipo5 = range5;
    
  return (
    <div className='GameSelectCtn'>
        <h2>Selecione o Tipo de Jogador pro seu jogo</h2>
            
        <section>
            <ul>
                <li>
                <input onChange={(e)=>{handleChange(e,setRange1)}} type="range"  min="0" max="100"   /> 
                            <label >{"Char1: "+range1}</label>
                </li>
                <li>
                    <input onChange={(e)=>{handleChange(e,setRange2)}} type="range" id="html" name="fav_language" ></input>
                    <label >{range2}</label>
                </li>
                <li>
                    <input onChange={(e)=>{handleChange(e,setRange3)}} type="range" id="html" name="fav_language" ></input>
                    <label >{range3}</label>
                </li>
                <li>
                    <input onChange={(e)=>{handleChange(e,setRange4)}} type="range" id="html" name="fav_language" ></input>
                    <label >{range4}</label>
                </li>
                <li>
                    <input onChange={(e)=>{handleChange(e,setRange5)}} type="range" id="html" name="fav_language" ></input>
                    <label >{range5}</label>
                </li>

            </ul>
           
        </section>
      
                        
            <button>Start</button>

           


        
    </div>
  )
}

export default SelectGame
