import './App.css';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Components
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
