import axios from 'axios';  //sirve para hacer peticiones
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://150.136.34.191:5000/api/proveedores/'

export const CompAgregarProveedores = () => {
    //propiedades del modelo
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();

    const GuardarProveedores = async (guardar) => {
        guardar.preventDefault()
        await axios.post(URL, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            empresa: empresa
        })
        navigate('/proveedores');
    }

    return (
        <div className='container'>
            <h3> Modulo Agregar Proveedores </h3>
            <form onSubmit={GuardarProveedores}>
                <div className='mb-3'>
                    <label className='form-label'> Nombres </label>
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
                    <label className='form-label'> Empresa </label>
                    <input value={empresa} onChange={(guardar) => setEmpresa(guardar.target.value)}
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

