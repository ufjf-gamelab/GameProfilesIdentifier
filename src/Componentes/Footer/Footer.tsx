import inova from '../../assets/inova.png'
import './footer.css'

function App() {

  return (
    <footer>
        <img src={inova}></img>
        <section >
            <h2>Desenvolvido por:</h2>
            <h3>Tevo Fiorilo</h3>
            <h3>Miguel Dias</h3> 
            <h3> Isabela Coelho</h3>        
        </section>
        <section >
          <h2>Referências:</h2>
            <a  style={{color:'white'}}href='https://quanticfoundry.com/gamer-types/'>The 9 Quantic Gamer Types</a>     
            <a  style={{color:'white'}}href='https://apps.quanticfoundry.com/surveys/start/gamerprofile/'>gamerprofile Quantic Foundry</a> 
            <a  style={{color:'white'}}href='https://quanticfoundry.com/'>Quantic Foundry</a>
            <a  style={{color:'white'}}href=' https://mud.co.uk/richard/selfware.html '>A Self of Sense</a>
            <a  style={{color:'white'}}href='https:www.google.com/'>Nosso Texto Não lembro o titulo</a>      

        </section>
    </footer>
  )
}

export default App
