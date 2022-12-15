import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:5000/api/solicitudes/'

//campo proveedores
const CompEditarSolicitud = () => {
    const [fechaInicio, setFechaI] = useState('');
    const [fechaFinal, setFechaF] = useState('');
    const [valor, setValor] = useState('');
    const [seguro, setSeguro] = useState('');
    const [equipo, setEquipo] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //funcion actualizar

    const ActualizarSolicitud = async (guardar) => {
        guardar.preventDefault()
        await axios.put(`${URL}${id}`, {
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            valor: valor,
            seguro: seguro,
            equipo: equipo
        })
        navigate('/solicitudes');
    }

    useEffect(() => {
        getSolicitudById();
        // eslint-disable-next-line
    },[]);

    //funcion modificar

    const getSolicitudById = async () => {
        const res = await axios.get(`${URL}${id}`);
        setFechaI(res.data.fechaInicio)
        setFechaF(res.data.fechaFinal)
        setValor(res.data.valor)
        setSeguro(res.data.seguro)
        setEquipo(res.data.equipo)
    }

    return (
        <div>
            <h3> Modulo Editar Solicitudes </h3>
            <form onSubmit={ActualizarSolicitud}>
                <div className='mb-3'>
                    <label className='form-label'>  Fecha inicial </label>
                    <input value={fechaInicio} onChange={(guardar) => setFechaI(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>  Fecha de Entrega </label>
                    <input value={fechaFinal} onChange={(guardar) => setFechaF(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Valor </label>
                    <input value={valor} onChange={(guardar) => setValor(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Seguro </label>
                    <input value={seguro} onChange={(guardar) => setSeguro(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Equipo Rentado </label>
                    <input value={equipo} onChange={(guardar) => setEquipo(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}

export default CompEditarSolicitud;
