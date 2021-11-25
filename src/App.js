import './App.css';

//Components
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        <NavBar/>
        <ItemListContainer greetings='Item 1'/>
        {/* <img src='Trueno-FC.png' alt="logo"  /> */}
    </div>
  );
}

export default App;
