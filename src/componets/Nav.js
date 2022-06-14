import React from "react";
import "./App.css"
import ConstructionIcon from '@mui/icons-material/Construction';

const Nav = ()=>{
    return (
        <div>
            <h1 className="tituloNav">Ferrimac Ferreteria Industrial</h1>
        <ul>       
            <li><a href="http://">Inicio</a></li>
            <li><a href="http://">Productos</a></li>
            <li><a href="http://">Contacto</a></li>
            <li><a href="http://">Quienes Somos</a></li>
            <ConstructionIcon />
        </ul>
        </div>
    )

}

export default Nav


