import inova from '../../assets/inova.png'
import './footer.css'

function App() {

  return (
    <footer>
        <img src={inova}></img>
        <section >
            <h2>Desenvolvido por:</h2>
            <h3>Estêvão Fiorilo</h3>
            <h3>Miguel Dias</h3> 
            <h3> Isabela Coelho</h3>        
        </section>
        <section >
          <h2>Referências:</h2>
            <a  href='https://quanticfoundry.com/gamer-types/'>The 9 Quantic Gamer Types</a>     
            <a  href='https://apps.quanticfoundry.com/surveys/start/gamerprofile/'>GamerProfile Quantic Foundry</a> 
            <a  href='https://quanticfoundry.com/'>Quantic Foundry</a>
            <a  href=' https://mud.co.uk/richard/selfware.html '>A Self of Sense</a>
            <a  href='https:www.google.com/'>Nosso Texto Não lembro o titulo</a>      

        </section>
    </footer>
  )
}

export default App
