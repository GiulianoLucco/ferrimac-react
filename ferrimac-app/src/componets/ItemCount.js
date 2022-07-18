import React, { useState } from "react";



export const ItemCount = ({itemStock, addCart }) => {
    const Swal = require('sweetalert2')
    const [contador,setContador] = useState(1);


  
  
    const handlerClick = () =>{
        if(contador<itemStock){
        setContador(contador + 1);
        }else{Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Stock Maximo',
            footer: 'No se puede agregar mas unidades'
          })
          }
    }
    const quitar = ()=>{
        if(contador>0){
            setContador(contador - 1);
        }else{(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se puede seguir quitando',
            
          }))
            
        }
        
    }
    const agregarCarrito = ()=>{                    
        
        addCart(contador)
        };

   

    return(
        
        <div className="itemCount">           
                       
            <ul className="btnCard">    
                <li> <button onClick={handlerClick}>Agregar</button></li>
                <li><div className="contador">{contador}</div></li>
                <li><button onClick={quitar}>Quitar</button></li>
             </ul>
             <button className="agregarCarrito" onClick={()=>agregarCarrito()}>Agregar a Carrito</button>
        </div>
    )
}