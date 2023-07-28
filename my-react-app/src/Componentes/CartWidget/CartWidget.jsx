import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';

const CartWidget = () => {
    const {cantTotal} = useContext(CarritoContext);
    return (
        <div>
            <img style={{width:"2rem"}}src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="Imagen de carrito" />
            <strong> {cantTotal}</strong>
        </div>
    )
}

export default CartWidget;