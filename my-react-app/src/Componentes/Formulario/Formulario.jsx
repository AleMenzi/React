import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/config";
import React from 'react'
import { CarritoContext } from "../../Context/CarritoContext";

const Formulario = () => {
        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [telefono, setTelefono] = useState("");
        const [email, setEmail] = useState("");
        const [emailConfirmacion, setEmailConfirmacion] = useState("");
        const [error, setError] = useState("");
        const [ordenId, setOrdenId] = useState("");

        const {carrito, vaciarCarrito, total, cantTotal} = useContext(CarritoContext)

        const manejadorFormulario = (event) => {
          event.preventDefault();
  

          if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
              setError("Complete todos los datos");
              return;
          }
   
          if (email !== emailConfirmacion) {
              setError("Los campos del email no coinciden");
              return;
          }
  
          const orden = {
              items: carrito.map(producto => ({
                  id: producto.item.id,
                  nombre: producto.item.nombre,
                  cantidad: producto.cantidad
              })),
              total: total,
              fecha: new Date(),
              nombre,
              apellido,
              telefono,
              email
          };
  
          addDoc(collection(db, "ordenes"), orden)
              .then(docRef => {
                  setOrdenId(docRef.id);
                  vaciarCarrito();
              })
              .catch(error => {
                  console.log("Error al crear la orden", error);
                  setError("Se produjo un error al crear la orden");
              })
      }
  return (
    <div>
      <h3> Formulario para compradores</h3>
      
      <form onSubmit={manejadorFormulario}>
        {
          carrito.map(producto =>(
          <div key={producto.item.id}>
            <p> {producto.item.nombre} x {producto.cantidad} </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))
        }   
        <hr />
            <div className="form-group">
              <label htmlFor="">Nombre </label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="">Apellido </label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="">Telefono </label>
              <input type="text" value={Telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="">Email </label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="">Email Confirmacion </label>
              <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>
              
            {
              error && <p style={{color:"red"}}> {error}</p>
            }
          <button type=""> Finalizar Compra </button>
      </form>
      {
        ordenId && (
          <> Gracias por tu compra. Se generó su orden y es la número {ordenId}
          </>
        )
      }
    </div>
  )
}

export default Formulario


