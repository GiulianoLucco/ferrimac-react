import React from 'react';
import Nav from './componets/Nav'
import ItemListConteiner from './componets/ItemListConteiner'
import ItemDetailConteiner from './componets/ItemDetailConteiner';



import './componets/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";






const App = ()=> {
  return (
    <BrowserRouter>
    <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />}/>       
          </Routes>
        <ItemDetailConteiner/>
    </div>
    </BrowserRouter>
    
        
  );
}

export default App;

