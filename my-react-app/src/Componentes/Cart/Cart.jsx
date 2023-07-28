import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, limpiarCarrito, total, cantTotal } = useContext(CarritoContext);

    if (cantTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito.</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad total: {cantTotal} </h3>
            <button onClick={() => limpiarCarrito()}> Vaciar Carrito </button>
            <Link to="/formulario"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart