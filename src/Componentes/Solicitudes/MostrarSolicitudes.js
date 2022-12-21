import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/solicitudes/'

export const CompMostrarSolicitudes = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    useEffect(() => {
        getSolicitudes()
    }, []);

    const getSolicitudes = async () => {
        const res = await axios.get(URL);
        setSolicitudes(res.data);
    }

    const eliminarProducto = async (id) => {
        await axios.delete(`${URL}${id}`)
        getSolicitudes();
    }

    return (
        <div className='container'>
            <div className="alert alert-light" role="alert" id='alerts'>
                <h4 className="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                    <Link to='/solicitudes/agregar' className="alert-link" id='alert-link'>
                        <span id='titulos'> Agregar Solicitud </span>
                    </Link>
                </p>
            </div>

            <div>
                <h2>Solicitudes Actuales</h2>
                <hr></hr>
            </div>
            <div className='row'>
                <div className='col'>
                    {/* <div className='agregar'>
                        <Link to='/solicitudes/agregar' className='btn btn-primary mt-2 mb-2'>
                            <i className="fa-solid fa-square-plus"></i>
                            <span id='titulos'> Agregar Solicitud </span>
                        </Link>

                    </div> */}

                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th> Fecha Inicial </th>
                                <th> Fecha de Entrega </th>
                                <th> Valor </th>
                                <th> Seguro </th>
                                <th> Equipo Rentado </th>
                                <th> Estado actual </th>
                                <th> Acciones </th>

                            </tr>
                        </thead>
                        <tbody>
                            {solicitudes.map((solicitudes, index) => (
                                <tr key={index}>
                                    <td>{solicitudes.fechaInicio}</td>
                                    <td>{solicitudes.fechaFinal}</td>
                                    <td>{solicitudes.valor}</td>
                                    <td>{solicitudes.seguro}</td>
                                    <td>{solicitudes.equipo}</td>
                                    <td>{solicitudes.estado}</td>
                                    <td>
                                        <Link to={`/solicitudes/editar/${solicitudes._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link>
                                        <button onClick={() => eliminarProducto(solicitudes._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
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
