import React,{useContext} from "react";
import { iProductos } from "../IProductos";
import { ItemCount } from "./ItemCount";
import { contexto } from "../Contexto";


const ItemDetail = ({itemId}) =>{
  
    
    const itemDetail = (iProductos[itemId]);
    const {agregarProduct} = useContext(contexto)

    const onAdd = (contador) => {
        alert(`se han agregado ${contador} al carrito`)
        const product = {...itemDetail,qty:contador}
        agregarProduct(product)

    }
   
    return(
        
            <div key={itemDetail.id} className="itemDetail">
                <h1>{itemDetail.name}</h1>
                <img src={itemDetail.imagen} alt="imagen producto"/> 
                <h2>{itemDetail.descripcion}</h2>
                <h3>Precio: $ {itemDetail.price}</h3>
                <h3>Stock Disponible: {itemDetail.stock}</h3>
                <ItemCount itemStock={itemDetail.stock} onAdd={onAdd}/>
                
            </div>
        
    )
  
}

   
export default ItemDetail