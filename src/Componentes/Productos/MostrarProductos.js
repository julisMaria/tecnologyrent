import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/productos/'

export const CompMostrarProductos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos()
    }, []);

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
            <div className="alert alert-light" role="alert" id='alerts'>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    <Link to='/productos/agregar' className="alert-link" id='alert-link'>
                        <span id='titulos'> Agregar Producto </span>
                    </Link>  </p>

                {/* <Link to='/productos/agregar' className='btn btn-primary'>
                            <i className="fa-solid fa-square-plus"></i>
                            <span id='titulos'> Agregar Producto </span>
                        </Link> */}

            </div>

            <div>
                <h2>Productos disponibles</h2>
                <hr></hr>
            </div>

            <div className='row'>
                <div className='col'>
                    {/* <div className='agregar'>
                        <Link to='/productos/agregar' className='btn btn-primary mt-2 mb-2'>
                            <i className="fa-solid fa-square-plus"></i>
                            <span id='titulos'> Agregar Producto </span>
                        </Link>
                    </div> */}
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Codigo </th>
                                <th> Producto </th>
                                <th> Cantidad / Stock</th>
                                <th> Categoria </th>
                                <th> Fecha de distribución </th>
                                <th> Empresa </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((productos, index) => (
                                <tr key={index}>
                                    <td>{productos.codigo}</td>
                                    <td>{productos.nombreProducto}</td>
                                    <td>{productos.cantidad}</td>
                                    <td>{productos.categoria}</td>
                                    <td>{productos.fecha}</td>
                                    <td>{productos.empresa}</td>
                                    <td>
                                        <Link to={`/productos/editar/${productos._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={() => eliminarProducto(productos._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
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
