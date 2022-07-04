import React, {useState, useEffect} from "react";
import   ItemList   from "./ItemList";



const iProductos = [
    {id:0, name:'Taladro', price:5000,stock:5,imagen:"../imagenes/taladro1.webp"},
    {id:1, name:'Compresor', price:15000,stock:10,imagen:"../imagenes/compresor1.webp"},
    {id:2, name:'Hidrolavadora', price:20000,stock:12,imagen:"../imagenes/hidro1.webp"},
    {id:3, name:'Maquina de Soldar', price:50000,stock:15,imagen:"../imagenes/soldar1.webp"}
]  
const promesa = new Promise((res,rej)=>{
   
        res(iProductos);
    
})


const ItemListConteiner = ()=>{

  

    const [productos,setProductos] = useState([])
    const [cargando,setCargando]=useState(false)

    useEffect(()=>{
        
        promesa.then((data)=>{
            setTimeout(()=>{
            setCargando(true)
            setProductos(data)
        },2000)
        }).catch(()=>{

        })
        
    },[])
    
    return (
        <div>
          
            {!cargando?<h2 style={{color:"red"}}>Cargando...</h2>:<ItemList className="itemList" items = {productos}/>}
            
            
        </div>
        
        
    )

}


export default ItemListConteiner