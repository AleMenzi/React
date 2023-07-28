import '../src/app.css'
import NavBar from '../src/Componentes/NavBar/Nav';
import ItemListContainer from '../src/Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Componentes/Cart/Cart';
import { CarritoProvider } from './Context/CarritoContext';
import Formulario from './Componentes/Formulario/Formulario';


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <h1 className='titulo'>Phoenix impresiones 3D</h1>
          <NavBar></NavBar>
          <Routes>
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/formulario' element={<Formulario/>}/>
              <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
              <Route path="*" element={<h2>Web en desarrollo</h2>}  />
            </Routes>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App;
