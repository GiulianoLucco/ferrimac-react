import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"





const ItemListConteiner = () => {

    const { categoryId } = useParams();
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
 
    useEffect(() => {
        
        const productCollection = collection(db,'productos')
        const q =query(productCollection, where ('category','==',`${categoryId}`))
        
        getDocs(categoryId? q : productCollection)
        .then(result=>{
           const lista = result.docs.map(doc=>{
              
            return{
                id:doc.id,
                ...doc.data(),

            }    
                  
            })
            setTimeout(()=>{
                setCargando(true)
                setProductos(lista)
                
                
            },2000)
            }).catch(()=>{

        }) 
       
    }, [categoryId])

    return (
        <div>
            { !cargando?<ClipLoader className="spinners"/>:<ItemList  className="itemList" items={productos} />}
        </div>


    )

}


export default ItemListConteiner