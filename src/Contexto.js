import React, { createContext, useState } from "react";


export const contexto = createContext();
const { Provider } = contexto
 const CustomProvider = ({children}) =>{


    
     const [cart,setCart] = useState([])
     

     const getQtyProducts = () =>{
        let qty = 0
        cart.forEach(cart => {
            qty += cart.contador
            
        });
        return qty
        
     }  

     const PriceTotal = () => {
        return cart.reduce((acum, i) => acum + i.contador * i.product.price, 0)
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
      
    }

    const eliminarProduct = (id) =>{

        return setCart(cart.filter((e)=>e.product.id !==id))
    }

    const resetProduct =(product)=>{
        setCart([])
    }

    const isLista = (id) =>{
        return cart && cart.some(e=>e.product.id===id)

         }
        
    
    return(
        <Provider value={{cart,agregarProduct,eliminarProduct,resetProduct,getQtyProducts,PriceTotal}}> 
             {children}
        </Provider>
      
        
    )
}
export default CustomProvider
