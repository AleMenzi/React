import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/config";
import React from 'react'
import { CarritoContext } from "../../Context/CarritoContext";
import "../Formulario/Formulario.css"

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [enable, setEnable] = useState(true);

  const { carrito, limpiarCarrito, total } = useContext(CarritoContext)

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
        nombre: producto.item.Nombre,
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
        limpiarCarrito();
      })
      .catch(error => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      })
  }
  const habilitarCompra = () => {
    if (nombre !== "" && apellido !== "" && telefono !== "" && email !== "" && emailConfirmacion !== "") {
      setEnable(false)

    } else {
      setEnable(true)
    }
  }


  return (
    <div>

      {!ordenId && (
        <>

          <h3 className="titleForm"> Formulario para compradores</h3>
          <form onSubmit={manejadorFormulario}>
            {
              carrito.map(producto => (
                <div className="nombreItemCart" key={producto.item.id}>
                  <p> {producto.item.Nombre} </p>
                  <img className="imgProd" src={producto.item.image} />
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Total: ${producto.item.Precio * producto.cantidad} </p>
                  <hr />
                </div>
              ))
            }

            <hr />
            <div className="formGroupAll">
            <div className="form-group">
              <label htmlFor="">Nombre: </label>
              <input type="text" value={nombre} onChange={(e) => {
                setNombre(e.target.value)
                habilitarCompra();
              }} />
            </div>

            <div className="form-group">
              <label htmlFor="">Apellido: </label>
              <input type="text" value={apellido} onChange={(e) => {
                setApellido(e.target.value)
                habilitarCompra()
              }} />
            </div>

            <div className="form-group">
              <label htmlFor="">Telefono: </label>
              <input type="text" value={telefono} onChange={(e) => {
                setTelefono(e.target.value)
                habilitarCompra()
              }} />
            </div>

            <div className="form-group">
              <label htmlFor="">Email: </label>
              <input type="email" value={email} onChange={(e) => {
                setEmail(e.target.value)
                habilitarCompra()
              }} />
            </div>

            <div className="form-group">
              <label htmlFor="">Email Confirmacion: </label>
              <input type="email" value={emailConfirmacion} onChange={(e) => {
                setEmailConfirmacion(e.target.value)
                habilitarCompra()
              }} />
            </div>
           </div>

            {
              error && <p style={{ color: "red" }}> {error}</p>
            }

            <button className="finalizarCompra" disabled={enable} type="submit"> Finalizar Compra </button>
          </form>
        </>
      )}
      {
        ordenId && (
          <> Gracias por tu compra. Se generó su orden número {ordenId}
          
          </>
        )
      }

    </div>
  )
}

export default Formulario


