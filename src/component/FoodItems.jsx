import { useState } from "react";
import Item from "./Item";
const FoodItems=({items})=>{
  let [activeItems,setActiveItems]=useState([]);
  let onBuyButton=(item,event)=>{
    let newitems=[...activeItems,item];
    setActiveItems(newitems)
  }
    
    return (
    <ul className="list-group">
    {items.map((item)=>(
    <Item key={item} fooditems={item}
    bought={activeItems.includes(item)}
     handleBybuttonClicked={()=>onBuyButton(item, event)}></Item>
    ))}
   </ul>
    );
}
export default FoodItems;