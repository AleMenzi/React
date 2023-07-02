import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h4>Nombre: {nombre} </h4>
        <p>Precio: {precio} </p>
        <p>ID: {id} </p>
        
    </div>
  )
}

export default ItemDetail;