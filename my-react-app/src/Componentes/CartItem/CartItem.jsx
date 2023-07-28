import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {deleteProd} = useContext(CarritoContext);

  return (
    <div>
        <h4> {item.nombre} </h4>
        <img className="imgProd" src={item.image}/>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.Precio} </p>
        <button onClick={() => deleteProd(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem