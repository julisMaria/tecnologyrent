import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/clientes/'

export const CompMostrarClientes = () => {
    const [clientes, setCliente] = useState([]);
    useEffect(() => {
        getClientes()
    },[]);

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
            <div className='row'>
                <div className='col'>
                    <Link to='/clientes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>   
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>                           
                                <th> Nombres </th>
                                <th> Apellidos </th>
                                <th> Documento </th>
                                <th> Correo </th>
                                <th> Telefono </th>
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
                                        <Link to={`/clientes/editar/${cliente._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link> 
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
