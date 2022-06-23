import React from 'react';
import Nav from './componets/Nav'
import ItemListConteiner from './componets/ItemListConteiner';

import './componets/App.css';




const App = ()=> {
  return (
    <div className="App">
      <Nav/>
      <ItemListConteiner greeting={"list conteiner"}/> 
      </div>
        
  );
}

export default App;

