import React,{useContext} from "react";
import { ItemCount } from "./ItemCount";
import { contexto } from "../Contexto";


const ItemDetail = ({itemId}) =>{
    const Swal = require('sweetalert2')
    
   
    const {agregarProduct} = useContext(contexto)

    const onAdd = (contador) => {
        Swal.fire(`Se agregaron ${contador} producto/s al carrito `)

        agregarProduct(itemId,contador)

    }
   
    return(
        
            <div key={itemId.id} className="itemDetail">
                <h1>{itemId.name}</h1>
                <img src={itemId.imagen} alt="imagen producto"/> 
                <h2>{itemId.descripcion}</h2>
                <h3>Precio: $ {itemId.price}</h3>
                <h3>Stock Disponible: {itemId.stock}</h3>
                <ItemCount itemStock={itemId.stock} onAdd={onAdd}/>
                
            </div>
        
    )
  
}

   
export default ItemDetail