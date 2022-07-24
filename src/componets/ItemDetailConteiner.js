import React,{useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import {getDoc,collection,doc}  from "firebase/firestore"


const ItemDetailConteiner = () =>{

    const [iProductos,setProductos] = useState([])
    const [cargando,setCargando]=useState(false)
    const {itemId}  = useParams();
   


    useEffect(()=>{
        const productCollection = collection(db,'productos')
        const refDoc= doc(productCollection,itemId)
        getDoc(refDoc)
        .then((result)=>{
            const producto ={
                id:result.id,
                ...result.data()
            }
            
            setTimeout(()=>{
            setCargando(true)
            setProductos(producto)
            console.log(producto);
            
        },2000)
        }).catch(()=>{

        })
        
    },[itemId])
    
    return  (
            <div className="ItemDetail">
            {!cargando?<ClipLoader className="spinners"/>:<ItemDetail className="itemList" itemId={iProductos} />}
            </div>
        )
}



export default ItemDetailConteiner