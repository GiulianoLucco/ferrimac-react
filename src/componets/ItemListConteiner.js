import React from "react";
import { ItemCount } from "../ItemCount";

const ItemListConteiner = ({greeting})=>{
    
    return (
        <div className="conteiner">
            <h1 className="listConteiner">{greeting}</h1>
            <ItemCount stock={10} initial={1}/>
        </div>
        
        
    )

}

export default ItemListConteiner