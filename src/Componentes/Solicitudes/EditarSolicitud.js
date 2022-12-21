import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:5000/api/solicitudes/'

//campo proveedores
export const CompEditarSolicitud = () => {
    const [fechaInicio, setFechaI] = useState('');
    const [fechaFinal, setFechaF] = useState('');
    const [valor, setValor] = useState('');
    const [seguro, setSeguro] = useState('');
    const [equipo, setEquipo] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    //funcion actualizar

    const ActualizarSolicitud = async (guardar) => {
        guardar.preventDefault()
        await axios.put(`${URL}${id}`, {
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            valor: valor,
            seguro: seguro,
            equipo: equipo,
            estado: estado
        })
        navigate('/solicitudes');
    }

    useEffect(() => {
        getSolicitudById();
        // eslint-disable-next-line
    }, []);

    //funcion modificar

    const getSolicitudById = async () => {
        const res = await axios.get(`${URL}${id}`);
        setFechaI(res.data.fechaInicio)
        setFechaF(res.data.fechaFinal)
        setValor(res.data.valor)
        setSeguro(res.data.seguro)
        setEquipo(res.data.equipo)
        setEstado(res.data.estado)
    }

    return (
        <div className='container'>
            <h3> Actualizar Solicitud </h3>
            <form onSubmit={ActualizarSolicitud}>
                <label className='form-label'>  Fecha inicial </label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">DD/MM/AAAA</span>

                    <input value={fechaInicio} onChange={(guardar) => setFechaI(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <label className='form-label'>  Fecha de Entrega </label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">DD/MM/AAAA</span>

                    <input value={fechaFinal} onChange={(guardar) => setFechaF(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <label className='form-label'> Valor </label>
                <div className="input-group mb-3">
                    <span class="input-group-text">$</span>

                    <input value={valor} onChange={(guardar) => setValor(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <label className='form-label'> Seguro </label>
                <div className="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input value={seguro} onChange={(guardar) => setSeguro(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Equipo Rentado </label>
                    <input value={equipo} onChange={(guardar) => setEquipo(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Estado </label>
                    <input value={estado} onChange={(guardar) => setEstado(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <button type='submit' className='btn btn-primary'>
                    <i className="fa-solid fa-floppy-disk"></i>
                    <span id='titulos'> Guardar cambios </span>
                </button>
            </form>
        </div>
    )
}
