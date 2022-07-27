import React, { useContext, useState } from "react";
import { contexto } from "../Contexto";
import  ItemCart  from "../ItemCart";
import { Link } from "react-router-dom";
import FormCompra from "../FormCompra";




const Cart = () => {
    const Swal = require('sweetalert2')
    const clear = ()=>{
        resetProduct()
    }

    const [finalizar,setFinalizar] = useState(false)
    

    const finalizarCompra = (itemCart)=>{
        console.log('finalizarCompra');
        setFinalizar(true)       

    }
    
    
    
    const borrarArt = (itemCart) =>{
        Swal.fire(`se elimino el producto  ${itemCart.product.name}`)
        
       const idCart = itemCart.product.id
       eliminarProduct(idCart)
        
        
    }
    
  

    const {eliminarProduct,resetProduct,cart,PriceTotal} = useContext(contexto)
    
       
        if(cart.length===0){

            return(
                <><div className="carritoVacio"><h1>No hay productos en el Carrito  </h1><Link to={"/"}>Agregar Articulos de AQUI!!! </Link></div></>
                )

            }


            return(
                <div>
            {cart.map((cart)=><ItemCart key={cart.id} itemCart={cart} borrarArt={borrarArt}>
            
        </ItemCart>)}
        <h1 className="totalCompra">Total de la compra:$ {PriceTotal()}</h1>
        <button className="borrarTodo" onClick={clear}>Borrar todo</button>
        <button className="borrarTodo" onClick={finalizarCompra}>Finalizar Compra</button>
        {!finalizar?"":<FormCompra  items={cart}/>}
        
        
        
        
        </div>
            )
        }
        
       
       
    



export default Cart
