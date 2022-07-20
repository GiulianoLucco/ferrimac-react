import React, { useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { contexto } from "../Contexto";

const CarWidget = ()=>{

    const {getQtyProducts} = useContext(contexto)
    const numCart = getQtyProducts()
    
    
    
    return (
        <>
        <AddShoppingCartIcon fontSize="large"/>
        {!numCart==0?<h2 className="numCart">{numCart}</h2>:<h2></h2>}
        </>
    )

}

export default CarWidget
