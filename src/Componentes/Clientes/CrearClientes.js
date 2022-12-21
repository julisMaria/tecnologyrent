import axios from 'axios';  //sirve para hacer peticiones
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:5000/api/clientes/'

export const CompAgregarClientes = () => {
    //propiedades del modelo
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();

    const GuardarClientes = async (guardar) => {
        guardar.preventDefault()
        await axios.post(URL, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            ciudad: ciudad
        })
        navigate('/clientes');
    }

    return (
        <div className='container'>
            <h3> Agregar Cliente </h3>
            <form onSubmit={GuardarClientes}>
                <label className='form-label'> Nombres </label>
                <div className='mb-3' >
                    <input value={nombres} onChange={(guardar) => setNombres(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Apellidos </label>
                    <input value={apellidos} onChange={(guardar) => setApellidos(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <label className='form-label'> Documento </label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">C.C</span>
                    <input value={documento} onChange={(guardar) => setDocumento(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <label className='form-label'> Correo </label>
                <div className="input-group mb-3">
                    <input value={correo} onChange={(guardar) => setCorreo(guardar.target.value)}
                        type='text' className='form-control'></input>
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Teléfono </label>
                    <input value={telefono} onChange={(guardar) => setTelefono(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Ciudad </label>
                    <input value={ciudad} onChange={(guardar) => setCiudad(guardar.target.value)}
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
