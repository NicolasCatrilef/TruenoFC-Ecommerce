import logo from './logo.svg';
import './App.css';

//Components
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greetings='Item 1'/>
        {/* <img src='Trueno-FC.png' alt="logo"  /> */}
    </div>
  );
}

export default App;
