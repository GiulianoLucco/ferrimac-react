import React, { useState } from "react";





export const ItemCount = ({minumero,initial,stock}) => {
    const [contador,setContador] = useState(1);
  
    const handlerClick = () =>{
        if(contador<stock){
        setContador(contador + 1);
        }else{alert("Stock total")}
    }
    const quitar = ()=>{
        if(contador>0){
            setContador(contador - 1);
        }else{
            alert("no se puede ")
        }
        
    }

    const agregarCarrito = ()=>{
        if(contador!==0){
            return console.log(contador)
        }else{
            alert("Por favor ingresar una cantidad valida")
        }
        
        
    }

    return(
        
        <div className="itemCount">
            
            <div>Taladro</div>            
            <ul className="btnCard">    
                <li> <button onClick={handlerClick}>Agregar</button></li>
                <li><div className="contador">{contador}</div></li>
                <li><button onClick={quitar}>Quitar</button></li>
             </ul>
             <button className="agregarCarrito" onClick={agregarCarrito}>Agregar a Carrito</button>
        </div>
    )
}
