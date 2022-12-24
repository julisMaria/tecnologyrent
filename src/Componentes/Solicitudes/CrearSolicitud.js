import axios from 'axios';  //sirve para hacer peticiones
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://150.136.34.191:5000/api/solicitudes/'

export const CompAgregarSolicitudes = () => {
    //propiedades del modelo
    const [fechaInicio, setFechaI] = useState('');
    const [fechaFinal, setFechaF] = useState('');
    const [valor, setValor] = useState('');
    const [seguro, setSeguro] = useState('');
    const [equipo, setEquipo] = useState('');
    const [estado, setEstado] = useState('');

    const navigate = useNavigate();

    const GuardarSolicitudes = async (guardar) => {
        guardar.preventDefault()
        await axios.post(URL, {
            fechaInicio: fechaInicio,
            fechaFinal: fechaFinal,
            valor: valor,
            seguro: seguro,
            equipo: equipo,
            estado: estado
        })
        navigate('/solicitudes');
    }

    return (
        <div className='container'>
            <h3> Agregar Solicitud </h3>
            <form onSubmit={GuardarSolicitudes}>
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
                <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <input value={valor} onChange={(guardar) => setValor(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <label className='form-label'> Seguro </label>
                <div class="input-group mb-3">
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
                    <span id='titulos'> Guardar </span>
                </button>
            </form>
        </div>
    )
}
