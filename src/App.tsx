import { useState } from 'react'

import './App.css'
import Header from './Componentes/Header/Header.jsx'
import Footer from './Componentes/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header></Header>
      <main>
x
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
