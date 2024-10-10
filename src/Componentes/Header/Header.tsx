import { useState } from 'react'

import './header.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
        <h1>Game Type Quiz</h1>
        <h2>Quantic Foundry</h2>
    </header>
  )
}

export default App
