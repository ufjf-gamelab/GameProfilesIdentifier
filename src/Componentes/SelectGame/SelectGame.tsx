import { useState } from 'react'
import './SelectGame.css'
import './Slider.css'
import resultApi from '../../Controlers/ResultGameApi'
import { useNavigate } from 'react-router-dom';

type Motivações = {ação:number, social : number, maestria : number, conquista : number, imersão : number, criatividade : number};

function SelectGame(props:any) {
   
    // function handleChange(event: any, setRange1: any) {
    //     setmotivações(resultApi)
    //     setRange1(event.target.value)        

        
    // }
    
    // resultApi.Inputs.ação = range1;
    // resultApi.Inputs.social = range2;
    // resultApi.Inputs.maestria = range3;
    // resultApi.Inputs.conquista = range4;
    // resultApi.Inputs.imersão = range5;
    // resultApi.Inputs.criatividade = range6;


    // const ranges = [
    //     { value: motivações.ação, setValue: setmotivações, label: "Ação " },
    //     { value: motivações.social, setValue: setmotivações, label: "Social " },
    //     { value: motivações.maestria, setValue: setmotivações, label: "Maestria " },
    //     { value: motivações.conquista, setValue: setmotivações, label: "Conquista " },
    //     { value: motivações.imersão, setValue: setmotivações, label: "Imersão " },
    //     { value: motivações.criatividade, setValue: setmotivações, label: "Criatividade " }
    // ];
  return (
    console.log(props),
    <div className='GameSelectCtn'>
        <h2>Selecione as Motivações pro seu jogo, e veja quais perfis de Jogadores ele agrada</h2>
        <section>
            <ul> 
                <li >

                    <input
                        value={props.ação}
                        onChange={(e) =>{
                            props.setAção(e.target.value)
                        }}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Ação'}<br></br>{ props.ação+ "%"}</label>
                </li>
                    
                
            </ul>
                    
        </section>
      
            <button onClick={() => {
            }}>Calcular</button>

           


        
    </div>
  )
}

export default SelectGame
