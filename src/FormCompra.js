import React, { useState ,useContext} from "react";
import { db } from "./firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { contexto } from "./Contexto";


const FormCompra = () => {
 
  const {cart,PriceTotal} = useContext(contexto)
  const [clientes, setClientes] =useState([]);
  const [finalizar,setFinalizar] = useState(false)
  const [idVentas,SetidVentas]=useState()
  const continuar = (e) => {
    
    setClientes({
      ...clientes,
      [e.target.name] : e.target.value
    })

  

}
const enviarDatos = (e) =>{
  e.preventDefault()
  setFinalizar(true)
  const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection,{
            clientes,
            items : {cart},
            date : serverTimestamp(),
            total : PriceTotal(),
           
        }).then((result)=>{
         const idVentas= result.id
         const fechaCompra = result.id.date
         
          SetidVentas(idVentas);
          console.log(fechaCompra);
         
        })
        
        
  }

  

  if(!finalizar){return (
    <div>
      <h1 className="h1Formulario">Ingrese los datos para finalizar la compra</h1>
      <form id="formulario" onSubmit={enviarDatos}>
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
  
);}
else{
  return(
    <>
    <h1 className="h1Formulario">Su compra a sido exitosa</h1>
    
    <h2 className="h1Formulario">El numero indentificador de su compra es "{idVentas}"</h2>
    

    </>
  )
}

  
};

export default FormCompra;
