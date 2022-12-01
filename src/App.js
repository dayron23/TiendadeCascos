import './App.css';
import Navbar from './components/NavBar';
import ItemLisContainer from './components/ItemLisContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemLisContainer greeting={"BIENVENIDOS CLIENTES"}/>
    </div>
  );
}

export default App;
