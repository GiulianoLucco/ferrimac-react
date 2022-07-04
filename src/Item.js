import React from "react";



export const Item = ({item}) => {
    

    const VerDetalles = ()=>{
       
        
        
    }

    return(
    
           
            <div className="itemCount" key={item.id}>
            
                <h1>{item.name}</h1> 
                <img src={item.imagen}></img>
                <button className="verDetalles" onClick={VerDetalles}>Ver Detalles</button>
                <ul className="btnCard">    
                    <li><h2>Stock: </h2></li>
                    <li><div className="contador">{item.stock}</div></li>
                </ul>
             
             </div>   )}
            
             
    