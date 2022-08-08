import React from "react";
import "./App.css"
import ConstructionIcon from '@mui/icons-material/Construction';
import CarWidget from "./CarWidget";
import { Link } from "react-router-dom";


const Nav = ()=>{

    const categories = [
        {name:"Herramientas Manuales", id:0  ,route: "/category/Herramientas Manuales" },
        {name:"Herramientas Electricas", id:1  ,route: "/category/Herramientas Electricas"},
        {name:"Soldadura", id:2  ,route: "/category/Soldadura"},
    ]
        
    
    return (
        <div>
            <h1 className="tituloNav">Ferrimac Ferreteria Industrial</h1>
        <ul>    
            <li><Link key="0" to={"/"}><ConstructionIcon /></Link> </li>              
            <li><Link key="1" to={"/"}><h2>Inicio</h2></Link></li>
                <ul>
                    {categories.map((category,index)=><li key={index} className="categories"><h3><Link  to={category.route}>{category.name}</Link></h3></li>)}
                </ul>
           <li><Link key="2" to={"/cart"}><CarWidget/></Link></li>
        </ul>
        </div>
        
    )

}

export default Nav

