import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria} from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const{idCategoria} = useParams ();

        useEffect(() => {
           const funcion = idCategoria ? getProductosPorCategoria : getProductos;
           funcion(idCategoria)
                .then(respuesta => setProductos(respuesta))
                .catch(error => console.log(error))

        }, [idCategoria])
    return (
    <div>
        <p style={{fontSize: "35px", color:"black"}}>{props.greeting}</p>
        <ItemList productos={productos}></ItemList>
    </div>
    )
}

export default ItemListContainer;