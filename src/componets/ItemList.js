import React from "react";
import { Item } from "./Item";




const ItemList =({items})=>{
    



    return (
        <>        
             <div className="listItem">
                 {items.map((items)=>
            <Item key={items.id} item={items}/>)}
            </div>
        </>       
            )}

export default ItemList;

