import React,{useState, useEffect} from "react";
import { iProductos } from "../IProductos";
import ItemDetail from "../ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";



const promesa = new Promise((res,rej)=>{
   
    res(iProductos);

})

const ItemDetailConteiner = () =>{

    const [iProductos,setProductos] = useState([])
    const [cargando,setCargando]=useState(false)

    useEffect(()=>{
        
        promesa.then((data)=>{
            setTimeout(()=>{
            setCargando(true)
            setProductos(data)
            
        },4000)
        }).catch(()=>{

        })
        
    },[])
    
    return  (
            <div className="ItemDetail">
            {!cargando?<ClipLoader className="spinners"/>:<ItemDetail className="itemList" iProductos={iProductos}/>}
            </div>
        )
}



export default ItemDetailConteiner