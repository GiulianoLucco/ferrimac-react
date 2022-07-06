import React from "react";


const ItemDetail = ({iProductos}) =>{
  
    
    let producto = iProductos[0]

    
    return(
        <div className="itemDetail">
            <h1 >{producto.name}</h1>
            <img src={producto.imagen}>
            </img>
            <h3>Detalles de producto: {producto.descripcion}</h3>
            <h2>Precio: $ {producto.price}</h2>
            <h2>Stock: {producto.stock} Unidades</h2>
            
        </div>
    )
}

   
export default ItemDetail