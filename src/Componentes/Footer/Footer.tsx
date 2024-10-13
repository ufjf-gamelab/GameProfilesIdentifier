import { useState } from 'react'
import inova from '../../assets/inova.png'
import './footer.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <footer>
        <img src={inova}></img>
        <section>
            <h2>Desenvolvido por:</h2>
            <h3>Tevo Fiorilo</h3>
            <h3>Miguel Dias</h3> 
            <h3> Isabela Coelho</h3>        
        </section>
    </footer>
  )
}

export default App
