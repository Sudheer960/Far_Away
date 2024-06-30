import './App.css';
import Logo from "./Logo";
import Form from './Form';
import Packinglist from './Packinglist';
import Stats from './Stats';

import { useState } from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {

  const [items, setItems] = useState(initialItems);
  
  const handleAddItems=(item)=>{
    setItems((CurrentItems)=>[...CurrentItems,item]);
  }

  const handleDeleteItem = (id) =>{
    setItems(items=>items.filter(item => item.id !== id));
  }

  const handleToggleItem = (id) =>{
    setItems((items)=>items.map(item => item.id === id ? {...item, packed : !item.packed}:item))
  }

  const handleClearItems = () =>{
    const isConformed = window.confirm("Would you like to clear the list.");
    if(isConformed) setItems([])
  }

  return (
    <div className="App">
      <Logo/>
      <Form onAddItem={handleAddItems} />
      <Packinglist items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
