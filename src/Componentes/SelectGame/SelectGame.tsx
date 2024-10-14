import './SelectGame.css'
import './Slider.css'

type Motivações = {ação:number, social : number, maestria : number, conquista : number, imersão : number, criatividade : number};

function SelectGame(props:any) {

  return (
    console.log(props),
    <div className='GameSelectCtn'>
        <h2>Selecione as Motivações pro seu jogo, e veja quais perfis de Jogadores ele agrada</h2>
        <section>
            <ul> 
                <li >
                    <input
                        value={props.ação}
                        onChange={(e) =>{props.setAção(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Ação'}<br></br>{ props.ação+ "%"}</label>
                </li>
                <li >
                    <input
                        value={props.social}
                        onChange={(e) =>{props.setSocial(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Social'}<br></br>{ props.social+ "%"}</label>
                </li>
                <li >
                    <input
                        value={props.maestria}
                        onChange={(e) =>{props.setMaestria(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Maestria'}<br></br>{ props.maestria+ "%"}</label>
                </li>
                <li >
                    <input
                        value={props.conquista}
                        onChange={(e) =>{props.setConquista(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Conquista'}<br></br>{ props.conquista+ "%"}</label>
                </li>
                <li >
                    <input
                        value={props.imersão}
                        onChange={(e) =>{props.setImersão(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Imersão'}<br></br>{ props.imersão+ "%"}</label>
                </li>
                <li >
                    <input
                        value={props.criatividade}
                        onChange={(e) =>{props.setCriatividade(e.target.value)}}
                        type="range"
                        min="0"
                        max="100"
                    />
                    <label>{'Criatividade'}<br></br>{ props.criatividade+ "%"}</label>
                </li>

            </ul>
                    
        </section>
      
     

           


        
    </div>
  )
}

export default SelectGame
