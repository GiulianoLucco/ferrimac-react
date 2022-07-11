import React,{useState, useEffect} from "react";
import { iProductos } from "../IProductos";
import ItemDetail from "../ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";



const promesa = new Promise((res,rej)=>{
   
    res(iProductos);

})

const ItemDetailConteiner = () =>{

    const [iProductos,setProductos] = useState([])
    const [cargando,setCargando]=useState(false)
    const {itemId}  = useParams();
    console.log(itemId);


    useEffect(()=>{
        
        promesa.then((data)=>{
            setTimeout(()=>{
            setCargando(true)
            setProductos(data)
            
        },2000)
        }).catch(()=>{

        })
        
    },[itemId])
    
    return  (
            <div className="ItemDetail">
            {!cargando?<ClipLoader className="spinners"/>:<ItemDetail className="itemList" itemId={itemId} />}
            </div>
        )
}



export default ItemDetailConteiner