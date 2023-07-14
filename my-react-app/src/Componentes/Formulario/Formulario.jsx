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
  return (
    <div>
      <h3> Formulario para compradores</h3>
      
      <form onSubmit={manejadorFormulario}>
              

              <label htmlFor="">Nombre </label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

              <label htmlFor="">Apellido </label>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>

              <label htmlFor="">Telefono </label>
              <input type="text" value={Telefono} onChange={(e) => setTelefono(e.target.value)}/>

              <label htmlFor="">Email </label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

              <label htmlFor="">Email Confirmacion </label>
              <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)}/>


              <button type=""> Enviar </button>
              
            {
              error && <p style={{color:"red"}}></p>
            }
          <button type=""> Reset </button>
      </form>
    </div>
  )
}

export default Formulario


