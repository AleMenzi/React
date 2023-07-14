
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, price, image}) => {
  return (
    <div className='card'>
      <img className='img' src={image} alt={title} />
      <div className='info'>
        <h4 className='nombre'>{title}</h4>
        <p className='precio'>Precio: ${price}</p>
        <p className='identificador'>id:{id}</p>
    </div>
      <div className='details'>
      <Link to={`/item/${id}`} > Ver Detalles </Link>
      </div>
      
    </div>
  )
}

export default Item