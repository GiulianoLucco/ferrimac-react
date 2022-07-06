import React from "react";
import "./App.css"
import ConstructionIcon from '@mui/icons-material/Construction';
import CarWidget from "./CarWidget";
import { Link } from "react-router-dom";

const Nav = ()=>{
    return (
        <div>
            <h1 className="tituloNav">Ferrimac Ferreteria Industrial</h1>
        <ul>    
            <Link to={"/"}><ConstructionIcon /></Link>
               
            <li><Link to={"hola"}>Inicio</Link></li>
            <li><Link to={"chau"}>Herramientas Electricas</Link></li>
            <li><Link to={"algo"}>Herramientas Manuales</Link></li>
            <li><Link to={"sale"}>Soldadura</Link></li>
           <Link to={"/cart"}><CarWidget/></Link>
        </ul>
        </div>
    )

}

export default Nav


