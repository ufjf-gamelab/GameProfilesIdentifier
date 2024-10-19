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
            <a  href='https://mud.co.uk/richard/selfware.html '>A Self of Sense</a>
            <a  href='https://www2.ufjf.br/inovagames/2024/10/10/o-que-motiva-os-jogadores-e-o-que-te-motiva-a-jogar-parte-3/'>O que motiva os Jogadores? (Parte 3) - Site Inova Games</a>      

        </section>
    </footer>
  )
}

export default App
