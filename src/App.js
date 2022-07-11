import React from 'react';
import Nav from './componets/Nav'
import ItemListConteiner from './componets/ItemListConteiner'
import ItemDetailConteiner from './componets/ItemDetailConteiner';
import './componets/App.css';
import Cart from './componets/Cart'



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = ()=> {

  return (    
    
    <BrowserRouter>    
        <Nav/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />} /> 
          <Route path="/category/:categoryId" element={<ItemListConteiner />} />  
          <Route path="/item/:itemId" element={<ItemDetailConteiner/>} />
          <Route path="/cart" element={<Cart/>} />    
          </Routes>
        
    </BrowserRouter>
 
     );
}

export default App;

