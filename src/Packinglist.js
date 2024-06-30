import React from "react";
import { useState } from "react";
import Item from "./Item";

const Packinglist = ({items,onDeleteItem,onToggleItem,onClearItems}) =>{
    const [sortby,setSortby] = useState("input");
    
    let sortedItems;

    if(sortby === "input") sortedItems=items;

    if(sortby === "description"){
      sortedItems = [...items].sort((a,b)=>a.description.localeCompare(b.description));
      //Taking a copy of items.. Shallow Copy
    } 

    if(sortby === "packed"){
      sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))
      //Copying using the slice method
    }
  
    return <div className='list'>
      <ul >
        {sortedItems.map(item=><Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>)}
      </ul>
      <div className='actions'>
        <select onChange={(e)=>setSortby(e.target.value)} value={sortby}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear Items</button>
      </div>
    </div>
}

export default Packinglist;