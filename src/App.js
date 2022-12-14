import logo from './logo.svg';
import './App.css';
//importamos componentes
import CompMostrarProveedores from './Componentes/Proveedores/MostrarProveedores';
import CompAgregarProveedores from './Componentes/Proveedores/CrearProveedores';
import CompEditarProveedores from './Componentes/Proveedores/EditarProveedores';
import CompMostrarClientes from './Componentes/Clientes/MostrarClientes';
import CompAgregarClientes from './Componentes/Clientes/CrearClientes';
import CompEditarClientes from './Componentes/Clientes/EditarClientes';
import CompMostrarProductos from './Componentes/Productos/MostrarProductos';

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
          <Route path='/clientes' element={<CompMostrarClientes/>}></Route>
          <Route path='/clientes/agregar' element={<CompAgregarClientes/>}></Route>
          <Route path='/clientes/editar/:id' element={<CompEditarClientes/>}></Route>
          <Route path='/productos' element={<CompMostrarProductos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//primero se inicia el backend