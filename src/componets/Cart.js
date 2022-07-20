import React, { useContext } from "react";
import { contexto } from "../Contexto";
import  ItemCart  from "../ItemCart";
import { Link } from "react-router-dom";


const Cart = () => {

    const clear = ()=>{
        resetProduct()
    }

    const borrarArt = (itemCart) =>{
        alert(`se elimino el producto numero ${itemCart.product.name},${itemCart.product.id}` )
       const idCart = itemCart.product.id
       eliminarProduct(idCart)
        console.log(idCart);
        
    }

    const {eliminarProduct,resetProduct,cart} = useContext(contexto)
    
       
        if(cart.length===0){

            return(
                <><div className="carritoVacio"><h1>No hay productos en el Carrito  </h1><Link to={"/"}>Agregar Articulos de AQUI!!! </Link></div></>
                )

            }


            return(
                <div>
            {cart.map((cart)=><ItemCart itemCart={cart} borrarArt={borrarArt}>
            
        </ItemCart>)}
        <button className="borrarTodo" onClick={clear}>Borrar todo</button>
        
        
        </div>
            )
        }
        
       
       
    



export default Cart
