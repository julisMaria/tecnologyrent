import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://150.136.34.191:5000/api/proveedores/'

export const CompMostrarProveedores = () => {
    const [proveedores, setProveedor] = useState([]);
    useEffect(() => {
        getProveedores()
    }, []);

    const getProveedores = async () => {
        const res = await axios.get(URL);
        setProveedor(res.data);
    }

    const eliminarProveedores = async (id) => {
        await axios.delete(`${URL}${id}`)
        getProveedores();
    }

    return (
        <div className='container'>
            <div className="alert alert-light" role="alert" id='alerts'>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    <Link to='/proveedores/agregar' className="alert-link" id='alert-link'>
                        <span id='titulos'> Agregar Proveedor </span>
                    </Link>
                </p>
            </div>

            <div>
                <h2>Nuestros proveedores</h2>
                <hr></hr>
            </div>
            <div className='row'>
                <div className='col'>
                    {/* <div className='agregar'>
                        <Link to='/proveedores/agregar' className='btn btn-primary mt-2 mb-2'>
                            <i className="fa-solid fa-user-plus"></i>
                            <span id='titulos'> Agregar Proveedor </span>
                        </Link>
                    </div> */}
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Nombres </th>
                                <th> Apellidos </th>
                                <th> Documento </th>
                                <th> Correo </th>
                                <th> Teléfono </th>
                                <th> Empresa </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedores.map((proveedor, index) => (
                                <tr key={index}>
                                    <td>{proveedor.nombres}</td>
                                    <td>{proveedor.apellidos}</td>
                                    <td>{proveedor.documento}</td>
                                    <td>{proveedor.correo}</td>
                                    <td>{proveedor.telefono}</td>
                                    <td>{proveedor.empresa}</td>
                                    <td>
                                        <Link to={`/proveedores/editar/${proveedor._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={() => eliminarProveedores(proveedor._id)} className='btn btn-danger'><i className="fa-solid fa-user-xmark"></i></button>
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

