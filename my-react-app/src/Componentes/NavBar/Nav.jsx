import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ color }) => {
    return (
        <header>
        <nav style={{ backgroundColor: color }}>
            <ul style={{ display: "flex",
                        margin: 0,
                        padding: 30,
                        listStyle: "none",
                        color:"black",
                        justifyContent:"space-around",
                        alignContent:"center",
                        cursor: "pointer"}}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Nosotros</li>        
                <li>Contactanos</li>
                <li>Carrito</li>
                <CartWidget></CartWidget>          
            </ul>
        </nav>
        
    </header>
    
    )
}

export default NavBar;


