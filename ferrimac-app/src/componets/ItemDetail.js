import React from "react";
import { iProductos } from "../IProductos";
import { ItemCount } from "./ItemCount";


const ItemDetail = ({itemId}) =>{
  
    
    const itemDetail = (iProductos[itemId]);

    const getData = (contador) => {
        alert(`se han agregado ${contador} al carrito`)

    }
   
    return(
        
            <div key={itemDetail.id} className="itemDetail">
                <h1>{itemDetail.name}</h1>
                <img src={itemDetail.imagen} alt="imagen producto"/> 
                <h2>{itemDetail.descripcion}</h2>
                <h3>Precio: $ {itemDetail.price}</h3>
                <h3>Stock Disponible: {itemDetail.stock}</h3>
                <ItemCount itemStock={itemDetail.stock} addCart={data => { getData(data)}}/>
                
            </div>
        
    )
  
}

   
export default ItemDetail