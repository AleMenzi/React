import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ color }) => {
    return (
        <header>
            <Link to="/">
                <h2 className="titulo2">Donde tus impresiones se materializan</h2>
            </Link>
            
        <nav style={{ backgroundColor: color }}>
            <ul style={{ display: "flex",margin: 0,padding: 30,listStyle: "none",color:"black",justifyContent:"space-around",alignContent:"center",cursor: "pointer",fontSize: 20,}}>

                <li><NavLink className="nav-link active" to="/categoria/1">
                    Inicio
                </NavLink></li>

                <li><NavLink className="nav-link active" to="/categoria/2">
                    Productos
                </NavLink></li>

                <li><NavLink className="nav-link active" to="/categoria/3">
                    Nosotros
                </NavLink></li>  

                <li><NavLink className="nav-link active" to="/categoria/4">
                    Contactanos
                </NavLink></li>

                <li><NavLink className="nav-link active" to="/categoria/5">
                    Carrito
                </NavLink></li>

                <CartWidget></CartWidget>
            </ul>
        </nav>
        
    </header>
    
    )
}

export default NavBar;


