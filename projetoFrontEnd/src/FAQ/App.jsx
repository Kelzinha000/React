import ButtonModdal from '../ButtonModal/ButtonMoldal';
import Container from '../Container/Container';
import Modal from '../Modal/Modal';
import './App.css'

const App = () => {
    return(
      <Container>
        <ButtonModdal text={"Botão"}/>
        <Modal texto={"Esse é o texto do meu modal"}/>

      </Container>
    )
}

export default App;