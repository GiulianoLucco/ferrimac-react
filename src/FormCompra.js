import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const FormCompra = () => {

  const datosComprador = {} 
  const [clientes, setClientes] =useState([{ nombre: '', apellido: '', email: '' }]);
  const continuar = (e) => {
    
    setClientes({
      ...clientes,
      [e.target.name] : e.target.value
    })

  

}
const enviarDatos = (e) =>{
  e.preventDefault()
  console.log(clientes);
    
  
  const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
            datosComprador,
            items : itemCart,
            date : serverTimestamp(),
            total: PriceTotal,
        })

  }

  return (
      <div><form id="formulario" onSubmit={enviarDatos}>
      <div className="mb-3">
        <label className="form-label">Ingrese Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          onChange={continuar}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingrese Apellido</label>
        <input
          type="text"
          className="form-control"
          name="apellido"
          onChange={continuar}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingrese Direccion de Email</label>
        <input type="text" className="form-control" name="email"  onChange={continuar} />
      </div>

      <button type="submit">Continuar</button>
    </form></div>
    
  );
};

export default FormCompra;
