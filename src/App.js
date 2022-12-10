import logo from './logo.svg';
import './App.css';
//importamos componentes
import CompMostrarProveedores from './Componentes/Proveedores/MostrarProveedores';
import CompAgregarProveedores from './Componentes/Proveedores/CrearProveedores';
//importamos librerias routes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompMostrarProveedores/>}></Route>
          <Route path='/agregar' element={<CompAgregarProveedores/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//primero se inicia el backend