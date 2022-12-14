import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:5000/api/clientes/'

//campo proveedores
const CompEditarClientes = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //funcion actualizar

    const ActualizarCliente = async (guardar) => {
        guardar.preventDefault()
        await axios.put(`${URL}${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            documento: documento,
            correo: correo,
            telefono: telefono,
            ciudad: ciudad
        })
        navigate('/clientes');
    }

    useEffect(() => {
        getClienteById();
        // eslint-disable-next-line
    },[]);

    //funcion modificar

    const getClienteById = async () => {
        const res = await axios.get(`${URL}${id}`);
        setNombres(res.data.nombres)
        setApellidos(res.data.apellidos)
        setDocumento(res.data.documento)
        setCorreo(res.data.correo)
        setTelefono(res.data.telefono)
        setCiudad(res.data.ciudad)
    }

    return (
        <div>
            <h3> Modulo Modificar Clientes </h3>
            <form onSubmit={ActualizarCliente}>
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

                <div className='mb-3'>
                    <label className='form-label'> Documento </label>
                    <input value={documento} onChange={(guardar) => setDocumento(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Correo </label>
                    <input value={correo} onChange={(guardar) => setCorreo(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Telefono </label>
                    <input value={telefono} onChange={(guardar) => setTelefono(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Ciudad </label>
                    <input value={ciudad} onChange={(guardar) => setCiudad(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )

}

export default CompEditarClientes;
