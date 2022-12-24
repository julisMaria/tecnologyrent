import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://150.136.34.191:5000/api/clientes/'

export const CompMostrarClientes = () => {
    const [clientes, setCliente] = useState([]);
    useEffect(() => {
        getClientes()
    }, []);

    const getClientes = async () => {
        const res = await axios.get(URL);
        setCliente(res.data);
    }

    const eliminarCliente = async (id) => {
        await axios.delete(`${URL}${id}`)
        getClientes();
    }

    return (
        <div className='container'>
            <div className="alert alert-light" role="alert" id='alerts'>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    <Link to='/clientes/agregar' className="alert-link" id='alert-link'>
                        <span id='titulos'> Agregar Cliente </span>
                    </Link>
                </p>
            </div>

            <div>
                <h2>Nuestros Clientes</h2>
                <hr></hr>
            </div>

            <div className='row'>
                <div className='col'>
                    {/* <div className='agregar'>
                        <Link to='/clientes/agregar' className='btn btn-primary mt-2 mb-2'>
                            <i className="fa-solid fa-user-plus"></i>
                            <span id='titulos'> Agregar Cliente </span>
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
                                <th> Ciudad </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente, index) => (
                                <tr key={index}>
                                    <td>{cliente.nombres}</td>
                                    <td>{cliente.apellidos}</td>
                                    <td>{cliente.documento}</td>
                                    <td>{cliente.correo}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.ciudad}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${cliente._id}`} className='btn btn-info'>
                                            <i className="fa-solid fa-file-pen"></i>
                                        </Link>
                                        <button onClick={() => eliminarCliente(cliente._id)} className='btn btn-danger'><i className="fa-solid fa-user-xmark"></i></button>
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
