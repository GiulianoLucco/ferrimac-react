import React from "react";
import { iProductos } from "./IProductos";


const ItemDetail = ({itemId}) =>{
  
    console.log(itemId);
    const itemDetail = (iProductos[itemId]);
   
    return(
        
            <div className="itemDetail">
                <h1>{itemDetail.name}</h1>
                <img src={itemDetail.imagen}/> 
                <h2>{itemDetail.descripcion}</h2>
                <h3>Precio: $ {itemDetail.price}</h3>
                <h3>Stock Disponible: {itemDetail.stock}</h3>
                
            </div>
        
    )
  
}

   
export default ItemDetail