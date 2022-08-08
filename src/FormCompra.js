import React, { useState ,useContext} from "react";
import { db } from "./firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { contexto } from "./Contexto";



const FormCompra = () => {
 
  const {cart,PriceTotal,resetProduct} = useContext(contexto)
  const [clientes, setClientes] =useState([]);
  const [finalizar,setFinalizar] = useState(false)
  const [idVentas,SetidVentas]=useState()
  

  const continuar = (e) => {
   
      setClientes({
        ...clientes,
        [e.target.name] : e.target.value
      })
     
    }
    
    
   


const borrar = () =>{
  setTimeout(()=>{
      resetProduct()
},6000)
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
          .finally(borrar())
          
 
        
        
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
        name="nombre" required
        placeholder="Giuliano Nicolas"
        
        onChange={continuar}
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Ingrese Apellido</label>
      <input
        type="text"
        className="form-control"
        name="apellido" required
        placeholder="Lucco"
           
        
        onChange={continuar}
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Ingrese Direccion de Email</label>
      <input type="email" className="form-control" name="email" required placeholder="hola@gmail.com"
     onChange={continuar} />
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
