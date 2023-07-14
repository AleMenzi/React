import React, { useState } from 'react'
import ItemCount from '../Contador/count';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({id, title, price, image}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {addProd} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, title, price};
    addProd(item, cantidad)
  }
  return (
    <div>
        <img src={image} alt={title} />
        <h4>Nombre: {title} </h4>
        <p>Precio: {price} </p>
        <p>ID: {id} </p>
        {

        }
        {
          agregarCantidad > 0 ? (<Link to="/carrito"> Finalizar compra</Link>) : (<ItemCount initial={1} stock={stock} functionAgregar={manejadorCantidad}/>) 
            
        }
    </div>
  )
}

export default ItemDetail;