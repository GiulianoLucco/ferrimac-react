import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { iProductos } from "../IProductos"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"
import { registerStyles } from "@emotion/utils";


const promesa = new Promise((res, rej) => {

    res(iProductos);

})



const ItemListConteiner = () => {

    const { categoryId } = useParams();
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
 

    useEffect(() => {
        const productCollection = collection(db,'productos')
        getDocs(productCollection)
        .then(result=>{
           const lista = result.docs.map(doc=>{
              
            return{
                id:doc.id,
                ...doc.data(),

            }    
                  
            })
            setProductos(lista)
        })





       
        promesa
            .then((data) => {

                setTimeout(() => {
                    const productoCategory = data.filter(pCategory => pCategory.category === categoryId)
                    const filtro = categoryId ? productoCategory : data
                    setCargando(true)
                    setProductos(filtro)
                }, 2000)
            }).catch(() => {

            })


    }, [categoryId])

    return (
        <div>
            {!cargando ? <ClipLoader className="spinners" /> : <ItemList className="itemList" items={productos} />}
        </div>


    )

}


export default ItemListConteiner