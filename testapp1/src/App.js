import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">
       <h1>
        Welcome Pako
       </h1>
       <button className="usr-btn">Athulta yamn pky</button>
      </header>
    </div>
  );
}

export default App;
