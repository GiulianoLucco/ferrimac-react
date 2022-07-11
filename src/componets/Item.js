import React from "react";
import { Link } from "react-router-dom";

export const Item = ({item}) => {
    
    
    const VerDetalles = ()=>{
        
        
      }
  

    return(
           

            <div className="itemCount" key={item.id}>
          
                <h1>{item.name}</h1> 
                <img src={item.imagen}/>
                <button className="verDetalles" onClick={VerDetalles} > <Link key={item.id} to={`/item/${item.id}`}>Ver Detalles</Link></button>
                <ul className="btnCard">    
                    <li><h2>Stock: </h2></li>
                    <li><div className="contador">{item.stock}</div></li>
                </ul>
             
             </div>   )}
            
             
    