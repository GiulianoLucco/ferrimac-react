import React from "react";

 const ItemCart = ({itemCart,borrarArt}) => {
     
    const btnborrar=()=>{
        borrarArt(itemCart)
    }
   
    return(
        
        <div  key={itemCart.product.id} >
            <ul className="itemCart">
                <li><h1>Articulo: {itemCart.product.name}</h1></li>
                <li><h2>Precio unitario:$ {itemCart.product.price}</h2></li>
                <li><h3>Cantidad: {itemCart.contador}</h3></li>
                <li><button onClick={btnborrar}>Borrar Articulo</button></li>
            </ul>
            
            
            
            
            
        </div>
        
    )

}

export default ItemCart