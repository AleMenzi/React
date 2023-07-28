import { useState } from 'react';
import './count.css'

const ItemCount = ({Stock, inicial, funcionAgregar}) => {
    
    const[contador, setContador] = useState(inicial);
//useState retorna un array con 2 elementos. El primero es el estado actual y el segundo es una función que actualiza ese estado, anteponiendo la palabra SET, al estado ej: setEstado

    const incrementar = () => {
        if (contador < Stock) {
        setContador(contador+1);
        }
    }
    const decrementar = () => {
        if (contador > inicial) {
        setContador(contador-1);
        }
    }
    return(
    <div className='contar'>
        <div className='controles'></div>
            <button onClick = {decrementar}> - </button>
            <p className='contarCss'> {contador} </p>
            <button onClick = {incrementar}> + </button>
            <div>
                <button className="Button" onClick={() => funcionAgregar(contador)}> Agregar al carrito </button>
            </div>
            
    </div>    
    )
}

export default ItemCount;