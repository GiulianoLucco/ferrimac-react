import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { iProductos } from "../IProductos"
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {

    res(iProductos);

})



const ItemListConteiner = () => {

    const { categoryId } = useParams();
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
 

    useEffect(() => {
      
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