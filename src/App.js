import logo from './logo.svg';
import './App.css';
//importamos componentes
import CompMostrarProveedores from './Componentes/Proveedores/MostrarProveedores';
import CompAgregarProveedores from './Componentes/Proveedores/CrearProveedores';
import CompEditarProveedores from './Componentes/Proveedores/EditarProveedores';

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
          <Route path='/proveedores' element={<CompMostrarProveedores/>}></Route>
          <Route path='/proveedores/agregar' element={<CompAgregarProveedores/>}></Route>
          <Route path='/proveedores/editar/:id' element={<CompEditarProveedores/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//primero se inicia el backend