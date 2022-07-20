import React, { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto
 const CustomProvider = ({children}) =>{

     const [cart,setCart] = useState([])
     const [cantidad,setCantidad] = useState(0)

     const getQtyProducts = () =>{
        let qty = 0
        cart.forEach(cart => {
            qty += cart.contador
            
        });
        return qty
        
     }
     

    const agregarProduct = (product,contador) =>{
        let item = {product,contador}
        let aux = []
        if(isLista(product.id)){
           item = cart.find((e)=>e.product.id==product.id)
           item.contador += contador
           aux = [...cart]
           
              
            }else{
            aux = [...cart,item]
        }
        setCart(aux)
        console.log(cart);
    }

    const eliminarProduct = (id) =>{

        return setCart(cart.filter((e)=>e.product.id !==id))
    }

    const resetProduct =(product)=>{
        console.log("vaciar lista");
        setCart([])
    }

    const isLista = (id) =>{
        return cart && cart.some(e=>e.product.id===id)

         }
        
    
    return(
        <Provider value={{cart,agregarProduct,eliminarProduct,resetProduct,getQtyProducts}}> 
             {children}
        </Provider>
      
        
    )
}
export default CustomProvider
