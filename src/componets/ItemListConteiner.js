import React, {useState, useEffect} from "react";
import   ItemList   from "./ItemList";
import { iProductos } from "../IProductos"
import ClipLoader from "react-spinners/ClipLoader";


  
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
          
            {!cargando?<ClipLoader className="spinners"/>:<ItemList className="itemList" items = {productos}/>}
            
            
        </div>
        
        
    )

}


export default ItemListConteiner