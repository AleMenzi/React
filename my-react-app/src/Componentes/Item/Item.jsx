
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, Nombre, Precio, image, Stock}) => {
  return (
    <div className='card'>
      <img className='imgProd' src={image} alt={Nombre} />
      <div className='info'>
        <h4 className='nombre'>{Nombre}</h4>
        <p className='precio'>Precio: ${Precio}</p>
        <div className='box'>
        <p className='identificador'>Codigo: {id}</p>
        <p>Stock: {Stock} </p>
        </div>
    </div>
      <div className='details'>
      <Link to={`/item/${id}`} > Ver Detalles </Link>
      </div>
      
    </div>
  )
}

export default Item