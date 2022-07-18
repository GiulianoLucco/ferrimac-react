import React, { createContext, useState } from "react";
import ItemDetail from "./componets/ItemDetail";

export const contexto = createContext();
const { Provider } = contexto
 const CustomProvider = ({children}) =>{

     const [products,setProducts] = useState([])
     const [cantidad,setCantidad] = useState(0)

     const getQtyProducts = () =>{
        
     }

    const agregarProduct = (product) =>{
        if(isLista(product.id)){
            const aux = [...products]
            const found = aux.find(p => p.id===product.id)
            found.qty += product.qty
            setProducts(aux)
           
              
            }else{
            setProducts([...products,product])
            console.log(products);
        }
        
        
    }

    const eliminarProduct = (product) =>{
        console.log("esta funcion te eliminar un usuario");
    }

    const resetProduct =(product)=>{
        console.log("vaciar lista");
        setProducts([])
    }

    const isLista = (id) =>{
        products.some(product=>product.id===id)
    
        
        
        

    }
        
    
    return(
        <Provider value={{products,agregarProduct,eliminarProduct,resetProduct}}> 
             {children}
        </Provider>
      
        
    )
}
export default CustomProvider
