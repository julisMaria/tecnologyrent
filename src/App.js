import './App.css';
//importamos componentes
import {
  CompMostrarProveedores, CompAgregarProveedores, CompEditarProveedores,
  CompMostrarClientes, CompAgregarClientes, CompEditarClientes,
  CompMostrarProductos, CompEditarProductos, CompAgregarProductos,
  CompMostrarSolicitudes, CompAgregarSolicitudes, CompEditarSolicitud
}
  from './Componentes/index.js';

//importamos librerias routes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="container">
        <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo' />
            <span className="fs-4">Website</span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className="nav-link active">Inicio</a></li>
            <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
            <li className="nav-item"><a href="/clientes" className="nav-link ">Clientes</a></li>
            <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
            <li className="nav-item"><a href="/solicitudes" className="nav-link">Solicitudes</a></li>
          </ul>

        </nav>

      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/proveedores' element={<CompMostrarProveedores />}></Route>
          <Route path='/proveedores/agregar' element={<CompAgregarProveedores />}></Route>
          <Route path='/proveedores/editar/:id' element={<CompEditarProveedores />}></Route>
          <Route path='/clientes' element={<CompMostrarClientes />}></Route>
          <Route path='/clientes/agregar' element={<CompAgregarClientes />}></Route>
          <Route path='/clientes/editar/:id' element={<CompEditarClientes />}></Route>
          <Route path='/productos' element={<CompMostrarProductos />}></Route>
          <Route path='/productos/agregar' element={<CompAgregarProductos />}></Route>
          <Route path='/productos/editar/:id' element={<CompEditarProductos />}></Route>
          <Route path='/solicitudes' element={<CompMostrarSolicitudes />}></Route>
          <Route path='/solicitudes/agregar' element={<CompAgregarSolicitudes />}></Route>
          <Route path='/solicitudes/editar/:id' element={<CompEditarSolicitud />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//primero se inicia el backend