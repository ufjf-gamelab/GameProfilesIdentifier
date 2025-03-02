import Header from '../../Componentes/Header/Header'
import Footer from '../../Componentes/Footer/Footer'
import { useRef, useState } from 'react'
import ResultApi from '../../Controlers/ResultGameApi'
import { getTreeData } from './data'
import './Persona.css'

function Personas() {
  const resultApi = new ResultApi()

  const defaultExpandedKeys = ['0', '0-2', '0-9-2']

  const motion = {
    motionName: 'node-motion',
    motionAppear: false,
    onAppearStart: () => ({ height: 0 }),
    onAppearActive: (node: any) => ({ height: node.scrollHeight }),
    onLeaveStart: (node: any) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  }

  return (
    <div className='PersonasCtn'>
      <Header />
      <main
        className='PersonasMain'
      >
        <div className='NodeTreeCtn'>

      
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Personas