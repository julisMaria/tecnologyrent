import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:5000/api/proveedores/'

//campo proveedores
export const CompEditarProveedores = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    //funcion actualizar

    const ActualizarProveedor = async (guardar) => {
        guardar.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            empresa: empresa
        })
        navigate('/proveedores');
    }

    useEffect(() => {
        getProveedorById();
        // eslint-disable-next-line
    }, []);

    //funcion modificar

    const getProveedorById = async () => {
        const res = await axios.get(`${URL}${id}`);
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)
        setEmpresa(res.data.empresa)
    }

    return (
        <div className='container'>
            <h3> Actualizar Proveedor </h3>
            <form onSubmit={ActualizarProveedor}>
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
                    <span id='titulos'> Guardar cambios </span>
                </button>
            </form>
        </div>
    )

}
