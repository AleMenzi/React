import '../Contador/count.css';
import { useState } from 'react';


const ItemCount = () => {
    const[contador, setContador] = useState (1);
//useState retorna un array con 2 elementos. El primero es el estado actual y el segundo es una función que actualiza ese estado, anteponiendo la palabra SET, al estado ej: setEstado
    const incrementarAUno = () => {
        console.log("agregado al carrito");
        if (contador <= 3) {
            document.getElementById("agregar").style.color = "purple";
        }
    }

    const incrementar = () => {
        if (contador < 1) {
        setContador(contador + 1);
        }
    }
    const decrementar = () => {
        if (contador < 1) {
        setContador(contador - 1);
        }
    }
    return(
    <>
        <button onClick = {incrementar}> + </button>,
        <p> {contador} </p>,
        <button onClick = {decrementar}> - </button>,

        <button onClick = {incrementarAUno} id="agregar"> Agregar al carrito</button>
    </>    
    )

}
//Las funciones van sin parentesis porque se ejecutarian al momento
export default ItemCount;