import './App.css';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Components
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext';
import { Shopping } from './components/Shopping/Shopping';
import { PageError } from './components/PageError/PageError';



function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:category' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shopping' element={<Shopping />} />
              <Route path='*' element={<PageError />} />
            </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
