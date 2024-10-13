import { useState } from 'react'
import './SelectGame.css'
import './Slider.css'
import resultApi from '../../Controlers/ResultGameApi'
function SelectGame() {
    const [range1, setRange1] = useState(0)
    const [range2, setRange2] = useState(0)
    const [range3, setRange3] = useState(0)
    const [range4, setRange4] = useState(0)
    const [range5, setRange5] = useState(0)
    const [range6, setRange6] = useState(0)

    function handleChange(event: any, setRange1: any) {
        setRange1(event.target.value)        
    }
    
    const ranges = [
        { value: range1, setValue: setRange1, label: "Ação " },
        { value: range2, setValue: setRange2, label: "Social " },
        { value: range3, setValue: setRange3, label: "Maestria " },
        { value: range4, setValue: setRange4, label: "Conquista " },
        { value: range5, setValue: setRange5, label: "Imersão " },
        { value: range6, setValue: setRange6, label: "Criatividade " }
    ];

    resultApi.Inputs.ação = range1;
    resultApi.Inputs.social = range2;
    resultApi.Inputs.maestria = range3;
    resultApi.Inputs.conquista = range4;
    resultApi.Inputs.imersão = range5;
    resultApi.Inputs.criatividade = range6;
  return (
    <div className='GameSelectCtn'>
        <h2>Selecione o Tipo de Jogador pro seu jogo</h2>
            
        <section>
            <ul>
                {ranges.map((range, index) => (
                    <li key={index}>
                        <input
                            value={range.value}
                            onChange={(e) => handleChange(e, range.setValue)}
                            type="range"
                            min="0"
                            max="100"
                        />
                        <label>{range.label + range.value}</label>
                    </li>
                ))}
            </ul>
                    
        </section>
      
                        
            <button onClick={()=>{
                window.location.href = '/result'
            }}>Start</button>

           


        
    </div>
  )
}

export default SelectGame
