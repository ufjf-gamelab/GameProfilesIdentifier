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
  const nome = props.nome
  const options = props.options
  
  

  return (
    <div className='QuestionCtn'>
        <h2>{nome}</h2>
        <ul>
            {
            options.map((option) => {

                return (
                    <li>
                        <h3>{option.resposta}</h3>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Question
