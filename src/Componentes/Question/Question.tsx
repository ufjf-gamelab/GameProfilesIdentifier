import { useState } from 'react'

import './Question.css'
interface opcao{
    resposta: string;
    propiedades: [number, number, number, number, number];
}
type Props = {
    nome: string
    options: opcao[],
    questao?: any
}
function Question(props: Props) {
  const [count, setCount] = useState(0)
  const [visivel,setVisivel] = useState(true)
  const nome = props.nome
  const options = props.options
  function clique (opcao: opcao){
    //fazer soma de propriedades agui
    console.log(opcao);
    setVisivel(false);
  }
   
  if (!visivel){
    return null;
  }

  return (
    <div className='QuestionCtn'>
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
