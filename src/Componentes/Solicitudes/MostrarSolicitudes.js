import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/solicitudes/'

export const CompMostrarSolicitudes = () => {
    const [solicitudes, setSolicitudes] = useState([]);
    useEffect(() => {
        getSolicitudes()
    },[]);

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
            <div className='row'>
                <div className='col'>
                    <Link to='/solicitudes/agregar' className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>   
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>                           
                                <th> Fecha inicial </th>
                                <th> Fecha de Entrega </th>
                                <th> Valor </th>
                                <th> Seguro </th>
                                <th> Equipo Rentado </th>
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
                                    <td> 
                                        <Link to={`/solicitudes/editar/${solicitudes._id}`} className='btn btn-info'><i className="fa-solid fa-file-pen"></i></Link> 
                                        <button onClick={() => eliminarProducto(solicitudes._id)} className='btn btn-danger'><i className="fa-solid fa-user-xmark"></i></button>
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
