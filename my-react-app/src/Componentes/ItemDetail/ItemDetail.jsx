import React, { useState } from 'react'
import ItemCount from '../Contador/count';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({id, Nombre, Precio, image, Stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {addProd} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, Nombre, Precio,image};
    addProd(item, cantidad)
  }
  return (
    <div className='cardDetail'>
        <img className="imgProd"src={image} alt={Nombre} />
        <h4>{Nombre} </h4>
        <p>Precio: ${Precio} </p>
        <p>Codigo: {id} </p>
        <p>Stock: {Stock} </p>
        {
          agregarCantidad > 0 ? (<Link to="/carrito"> Finalizar compra</Link>) : (<ItemCount  Stock={Stock} inicial={1} funcionAgregar={manejadorCantidad}/>) 
            
        }
    </div>
  )
}

export default ItemDetail;