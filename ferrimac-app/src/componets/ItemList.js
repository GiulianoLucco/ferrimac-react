import React from "react";
import { Item } from "./Item";




const ItemList =({items})=>{
    



    return (
        <>        
             <div className="listItem">
                 {items.map((items)=>
            <Item item={items}/>)}
            </div>
        </>       
            )}

export default ItemList;

