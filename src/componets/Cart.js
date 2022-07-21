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
    
  

    const {eliminarProduct,resetProduct,cart,PriceTotal} = useContext(contexto)
    
       
        if(cart.length===0){

            return(
                <><div className="carritoVacio"><h1>No hay productos en el Carrito  </h1><Link to={"/"}>Agregar Articulos de AQUI!!! </Link></div></>
                )

            }


            return(
                <div>
            {cart.map((cart)=><ItemCart itemCart={cart} borrarArt={borrarArt}>
            
        </ItemCart>)}
        <h1 className="totalCompra">Total de la compra:$ {PriceTotal()}</h1>
        <button className="borrarTodo" onClick={clear}>Borrar todo</button>
        <button className="borrarTodo" >Finalizar Compra</button>
        
        
        </div>
            )
        }
        
       
       
    



export default Cart
