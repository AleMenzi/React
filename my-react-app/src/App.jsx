import '../src/app.css'
import NavBar from '../src/Componentes/NavBar/Nav';
import ItemListContainer from '../src/Componentes/ItemListContainer/ItemListContainer'
import CardUser from './Componentes/Card/Card';

function App() {
  return (
    <>
      <h1 className='titulo'>Phoenix impresiones 3D</h1>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos al mundo de la impresión 3D"}></ItemListContainer>
      <CardUser></CardUser>
    </>
  )
}

export default App
