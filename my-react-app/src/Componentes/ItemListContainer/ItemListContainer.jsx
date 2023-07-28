import { useState, useEffect } from "react";
//import { getProductos, getProductosPorCategoria} from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore";
/*
getDocs me permite obtener documentos de una colección
collection me permite obtener una colección
query la uso cuando quiero generar una consulta
where la uso para agregar filtros a mis consultas
*/
import { db } from "../../services/config";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const{idCategoria} = useParams ();

        useEffect(() => {
           const funcion = idCategoria ? query(collection(db, "Inventario"), 
           where("idCat", "==", idCategoria)) : collection(db, "Inventario");

           getDocs(funcion)
            .then(res => {
                const nuevoInv = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
                })
                setProductos(nuevoInv);
            })
           .catch(error => console.log(error))

        }, [idCategoria])
        /*
        const descontarStock = async (Productos) => {
            const productoRef = doc (db, "productos", Productos.id);
            const nuevoStock = Productos.stock -1;

            await updateDoc(productoRef, {stock:nuevoStock});

        }
        */
    return (
    <div>
        <p style={{fontSize: "35px", color:"black"}}>{props.greeting}</p>
        <ItemList productos={productos}></ItemList>
    </div>
    )
}

export default ItemListContainer;