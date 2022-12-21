import axios from 'axios';  //sirve para hacer peticiones
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = 'http://localhost:5000/api/productos/'

export const CompAgregarProductos = () => {
    //propiedades del modelo
    const [codigo, setCodigo] = useState('');
    const [nombreProducto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();

    const GuardarProductos = async (guardar) => {
        guardar.preventDefault()
        await axios.post(URL, {
            codigo: codigo,
            nombreProducto: nombreProducto,
            cantidad: cantidad,
            categoria: categoria,
            fecha: fecha,
            empresa: empresa
        })
        navigate('/productos');
    }

    return (
        <div className='container'>
            <h3> Agregar Producto </h3>
            <form onSubmit={GuardarProductos}>
                    <label className='form-label'> Código </label>
                    <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">#000</span>
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
                    <label className='form-label'> Categoria </label>
                    <input value={categoria} onChange={(guardar) => setCategoria(guardar.target.value)}
                        type='text' className='form-control'></input>
                </div>

                    <label className='form-label'> Fecha de distribución </label>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">DD/MM/AAAA</span>

                    <input value={fecha} onChange={(guardar) => setFecha(guardar.target.value)}
                        type='text' className='form-control'></input>
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
