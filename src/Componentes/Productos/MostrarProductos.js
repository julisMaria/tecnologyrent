import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/productos/'

export const CompMostrarProductos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos()
    },[]);

    const getProductos = async () => {
        const res = await axios.get(URL);
        setProductos(res.data);
    }

    const eliminarProducto = async (id) => {
        await axios.delete(`${URL}${id}`)
        getProductos();
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/productos/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>   
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>                           
                                <th> Codigo </th>
                                <th> Producto </th>
                                <th> Cantidad </th>
                                <th> Fecha </th>
                                <th> Empresa </th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((productos, index) => (
                                <tr key={index}>
                                    <td>{productos.codigo}</td>
                                    <td>{productos.nombreProducto}</td>
                                    <td>{productos.cantidad}</td>
                                    <td>{productos.fecha}</td>
                                    <td>{productos.empresa}</td>
                                    <td> 
                                        <Link to={`/productos/editar/${productos._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link> 
                                        <button onClick={() => eliminarProducto(productos._id)} className='btn btn-danger'><i className="fa-solid fa-user-xmark"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
