import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ color }) => {
    return (
        <header>
            <Link to="/">
                <h2 className="titulo2">Ver todas las categorías</h2>
            </Link>

            <nav style={{ backgroundColor: color }}>
                <ul style={{ display: "flex", margin: 0, padding: 30, listStyle: "none", color: "black", justifyContent: "space-around", alignContent: "center", cursor: "pointer", fontSize: 20, }}>

                    <li><NavLink className="nav-link active" to="/categoria/1">
                        Categoria 1
                    </NavLink></li>

                    <li><NavLink className="nav-link active" to="/categoria/2">
                        Categoria 2
                    </NavLink></li>

                    <li><NavLink className="nav-link active" to="/categoria/3">
                        Categoria 3
                    </NavLink></li>

                    <li><NavLink className="nav-link active" to="/categoria/4">
                        Categoria 4
                    </NavLink></li>

                    <li><NavLink className="nav-link active" to="/categoria/5">
                        Categoria 5
                    </NavLink></li>

                    <NavLink to="/carrito">
                        <CartWidget></CartWidget>
                    </NavLink>
                </ul>
            </nav>

        </header>

    )
}

export default NavBar;


