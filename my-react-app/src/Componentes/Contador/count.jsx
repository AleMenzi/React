import { useState } from 'react';
import './count.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const[contador, setContador] = useState (initial);
//useState retorna un array con 2 elementos. El primero es el estado actual y el segundo es una función que actualiza ese estado, anteponiendo la palabra SET, al estado ej: setEstado

    const incrementar = () => {
        if (contador < stock) {
        setContador(contador+1)
        }
    }
    const decrementar = () => {
        if (contador > 1) {
        setContador(contador-1)
        }
    }
    return(
    <div className='contar'>
        <div className='controles'></div>
            <button onClick = {decrementar}> - </button>
            <p className='contarCss'> {contador} </p>
            <button onClick = {incrementar}> + </button>
            <div>
                <button className="Button" onClick={() => onAdd(contador)} disabled={!stock}> Agregar al carrito </button>
            </div>
            
    </div>    
    )
}
//Las funciones van sin parentesis porque se ejecutarian al momento
export default ItemCount;