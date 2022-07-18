import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto
 const CustomProvider = ({children}) =>{

     const [products,setProducts] = useState([])
     const [cantidad,setCantidad] = useState(0)

     const getQtyProducts = () =>{
        setCantidad
     }

    const agregarProduct = (product) =>{
       if(isLista(product.id)){
            const aux = [...product]
            const found = aux.find(p=>p.id===product.id)
            found.qty += product.qty
            setProducts(aux)
       }else{
           setProducts([...products,product])
       }
    }

    const eliminarProduct = (product) =>{
        console.log("esta funcion te eliminar un usuario");
    }

    const resetProduct =(product)=>{
        console.log("vaciar lista");
    }

    const isLista = (id) =>{
        product.some(product => product.id===id)
        
        
    
    return(
        <Provider value={{product,agregarProduct,eliminarProduct,resetProduct}}> 
             {children}
        </Provider>
      
        
    )
}}
export default CustomProvider
