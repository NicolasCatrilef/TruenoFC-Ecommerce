import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <header className="App-header">
        <img src='Trueno-FC.png' alt="logo"  />
        <p>
          Club Social Deportivo Cultural <code>TRUENO FC</code>
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
