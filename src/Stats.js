import React from "react";

const Stats = ({items}) => {
    if(items.length === 0) return <footer className='stats'>Start adding Items to your cart.🚀</footer>
    
    const totalItems = items.length;
    const packedItems = items.filter((item)=> item.packed).length;
    const percentage = Math.round((packedItems/totalItems)*100);
    return (<footer className='stats'> 
      <em>{
      percentage === 100 ? "You got everything and ready to go 🚀" : `💼 you have packed ${packedItems} items out of ${totalItems} items.(${percentage})`
      }
      </em>
    </footer>)
  }
export default Stats;