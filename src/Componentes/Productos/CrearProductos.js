import axios from 'axios';  //sirve para hacer peticiones
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:5000/api/productos/'

export const CompAgregarProductos = () => {
    //propiedades del modelo
    const [codigo, setCodigo] = useState('');
    const [nombreProducto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();

    const GuardarProductos = async (guardar) => {
        guardar.preventDefault()
        await axios.post(URL, {
            codigo: codigo,
            nombreProducto: nombreProducto,
            cantidad: cantidad,
            fecha: fecha,
            empresa: empresa
        })
        navigate('/productos');
    }

    return (
        <div>
            <h3> Modulo Agregar Productos </h3>
            <form onSubmit={GuardarProductos}>
                <div className='mb-3'>
                    <label className='form-label'> Codigo </label>
                    <input value={codigo} onChange={(guardar) => setCodigo(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Producto </label>
                    <input value={nombreProducto} onChange={(guardar) => setProducto(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Cantidad </label>
                    <input value={cantidad} onChange={(guardar) => setCantidad(guardar.target.value)}
                        type='number' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Fecha </label>
                    <input value={fecha} onChange={(guardar) => setFecha(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'> Empresa </label>
                    <input value={empresa} onChange={(guardar) => setEmpresa(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                <button type='submit' className='btn btn-primary'><i className="fa-solid fa-floppy-disk"></i></button>
            </form>
        </div>
    )
}
