import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {idItem} = useParams();

    useEffect( ()=> {
        const nuevoDoc = doc(db, "Inventario", idItem);

        getDoc(nuevoDoc)
          .then(res => {
            const data = res.data();
            const nuevoProducto = {id: res.id, ...data}
            setProducto(nuevoProducto);
          })
          .catch(error => console.log(error))
    }, [idItem])
console.log(producto);
  return (
    <div>
        {
          producto.Nombre ? (<ItemDetail {...producto}/>) : <h4>Este Producto no existe en nuestra base de datos</h4>
        }
    </div>
  )
}

export default ItemDetailContainer;