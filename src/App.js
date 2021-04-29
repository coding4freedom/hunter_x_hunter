import './App.css';
/* Components Imports  */
import Dashboard from './Components/Dashboard';
import Instructions from "./Components/Instructions";

function App() {
  return (
    <div className="App front">
      <Instructions />
      <Dashboard /> 
    </div>
  );
}

export default App;
