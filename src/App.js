import './App.css';
import Navbar from './components/NavBar';
import ItemLisContainer from './components/ItemLisContainer';
import FunctionCounter from './components/FunctionCounter';
import ClassCounter from './components/ClassCounter';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemLisContainer greeting={"BIENVENIDOS CLIENTES"}/>
      <FunctionCounter element={ClassCounter}/>
      <ClassCounter/>
    </div>
  );
}

export default App;
