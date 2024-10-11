import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'
import Question from './Componentes/Question/Question.jsx'
import SelectGame from './Componentes/SelectGame/SelectGame.jsx'
import questionApi from './Controlers/QuestionApi.js'
import Resultado from './Resultado/Resultado.tsx'
function App() {
  const [count, setCount] = useState(0)
  const questoes = questionApi.questions
  let terminou: boolean = false;
  return (
    <div className='App'>
      <Header></Header>
      
      <main>
        
        {
            questoes.map((questao) => {

              
              return (
                <Question nome={questao.nome} options={questao.options}></Question>
              )
            }) 
          
          
        }
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
