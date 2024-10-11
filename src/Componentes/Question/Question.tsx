import { useState } from 'react'
import questionApi from '../../Controlers/QuestionApi';
import './Question.css'
interface arquetipos{
    tipo1: number,
    tipo2: number,
    tipo3: number,
    tipo4: number,
    tipo5: number,
}
interface opcao{
    resposta: string;
    propiedades: arquetipos;
}
type Props = {
    nome: string
    options: opcao[],
    questao?: any
}
function Question(props: Props) {
  const [count, setCount] = useState(0)
  const [fadeIn,setfadeIn] = useState("")
  const [display, setDisplay] = useState("")
  const nome = props.nome
  const options = props.options
  
  function clique (opcao: opcao){
    console.log(opcao);
    setfadeIn('fadeIn');
    setTimeout(() => {
        setDisplay('none');
    }, 450);
    questionApi.resposta.push(opcao.propiedades);
    console.log(questionApi.resposta);
  }



  

  return (
    <div className={'QuestionCtn ' + fadeIn} style={{display:display}} >
        <h2>{nome}</h2>
        <ul>
            {
            options.map((option) => {

                return (
                    <li onClick={()=> clique(option)}>
                        <h3>{option.resposta}</h3>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Question
