import React from "react";
import "./App.css"
import ConstructionIcon from '@mui/icons-material/Construction';
import CarWidget from "./CarWidget";


const Nav = ()=>{
    return (
        <div>
            <h1 className="tituloNav">Ferrimac Ferreteria Industrial</h1>
        <ul>    
            <ConstructionIcon />   
            <li><a href="http://">Inicio</a></li>
            <li><a href="http://">Productos</a></li>
            <li><a href="http://">Contacto</a></li>
            <li><a href="http://">Quienes Somos</a></li>
           <CarWidget/>
        </ul>
        </div>
    )

}

export default Nav


