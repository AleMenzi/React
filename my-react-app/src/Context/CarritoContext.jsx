import React from "react";
import {useState, createContext,} from "react"


export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantTotal: 0,
});

//De esta manera guardamos los datos del carrito
export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantTotal, setCantTotal] = useState(0);

    console.log(carrito);

    const addProd = (item, cantidad) => {
        const prodExistente = carrito.find(prod => prod.item.id === item.id);

        if(!prodExistente) {
            setCarrito(prev => [...prev, {item, cantidad}]);
            setCantTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.Precio * cantidad));
            //La sintaxis: prev => [...prev, {item, cantidad}] Se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad:prod.cantidad + cantidad};
                }else{
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.Precio * cantidad));
        }

    }
    const deleteProd = (id) => {
        const prodDelete = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito (carritoActualizado);
        setCantTotal(prev => prev - prodDelete.cantidad);
        setTotal(prev => prev - (prodDelete.item.Precio * prodDelete.cantidad));

    }

    const limpiarCarrito = () => {
        setCarrito([]);
        setCantTotal(0);
        setTotal(0);
    }
    return(
        <CarritoContext.Provider value={{carrito, total, cantTotal, addProd, deleteProd, limpiarCarrito}}>
            {children}
            {/* La propiedad Children sirve para representar a todos aquellos componentes que puedan necesitar el carrito y sus métodos*/}
        </CarritoContext.Provider>

    )
}
