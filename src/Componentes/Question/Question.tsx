import { useState } from 'react'

import './Question.css'
type Props = {
    nome: string
    options: string[],
    questao?: any
}
function SelectGame(props: Props) {
  const [count, setCount] = useState(0)
  const nome = props.nome
  const options = props.options
  
  

  return (
    <div className='QuestionCtn'>
        <h2>{nome}</h2>
        <ul>
            {options.map((option) => {
                return (
                    <li>
                        <h3>{option}</h3>
                       
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default SelectGame
