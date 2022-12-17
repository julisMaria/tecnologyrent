import {
    CompMostrarProveedores, CompAgregarProveedores, CompEditarProveedores,
    CompMostrarClientes, CompAgregarClientes, CompEditarClientes,
    CompMostrarProductos, CompEditarProductos, CompAgregarProductos,
    CompMostrarSolicitudes, CompAgregarSolicitudes, CompEditarSolicitud
}
    from '../index.js';
import { Route, Routes } from 'react-router-dom'
import { CompInicio } from './Inicio.js';

export const CompRutas = () => {
    return (
        <Routes>
            <Route path='/' element={<CompInicio />}></Route>
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
    )
}