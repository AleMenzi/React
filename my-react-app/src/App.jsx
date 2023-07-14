import '../src/app.css'
import NavBar from '../src/Componentes/NavBar/Nav';
import ItemListContainer from '../src/Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <h1 className='titulo'>Phoenix impresiones 3D</h1>
          <NavBar></NavBar>
          {/* <ItemListContainer greeting={"Bienvenidos al mundo de la impresión 3D"}></ItemListContainer> */}
          <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
              <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
              <Route path="*" element={<h2>Web en desarrollo</h2>}  />
            </Routes>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App;
