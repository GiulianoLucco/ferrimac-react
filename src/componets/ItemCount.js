import React, { useState } from "react";
import {Swal} from 'sweetalert2'












export const ItemCount = ({minumero,initial,itemStock}) => {
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
        if(contador!==0){
            return console.log(contador)
            (Swal.fire({
                title: 'Finalizar la compra?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Finalizar',
                denyButtonText: `Volver`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Compra Finalizada', '', 'Felicitaciones')
                } else if (result.isDenied) {
                  Swal.fire('Volver', '', 'finalizada')
                }
              }))

        }else{
            (Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede realizar esta accion ',
                footer: 'Por favor ingresar una cantidad validad'
              }))
        }
        
        
    }

    return(
        
        <div className="itemCount">           
                       
            <ul className="btnCard">    
                <li> <button onClick={handlerClick}>Agregar</button></li>
                <li><div className="contador">{contador}</div></li>
                <li><button onClick={quitar}>Quitar</button></li>
             </ul>
             <button className="agregarCarrito" onClick={agregarCarrito}>Agregar a Carrito</button>
        </div>
    )
}