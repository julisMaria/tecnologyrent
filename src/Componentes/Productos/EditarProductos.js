import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URL = 'http://localhost:5000/api/productos/'

//campo proveedores
export const CompEditarProductos = () => {
    const [codigo, setCodigo] = useState('');
    const [nombreProducto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    //funcion actualizar

    const ActualizarProducto = async (guardar) => {
        guardar.preventDefault()
        await axios.put(`${URL}${id}`, {
            codigo: codigo,
            nombreProducto: nombreProducto,
            cantidad: cantidad,
            fecha: fecha,
            empresa: empresa
        })
        navigate('/productos');
    }

    useEffect(() => {
        getProductoById();
        // eslint-disable-next-line
    },[]);

    //funcion modificar

    const getProductoById = async () => {
        const res = await axios.get(`${URL}${id}`);
        setCodigo(res.data.codigo)
        setProducto(res.data.nombreProducto)
        setCantidad(res.data.cantidad)
        setFecha(res.data.fecha)
        setEmpresa(res.data.empresa)
    }

    return (
        <div>
            <h3> Modulo Agregar Productos </h3>
            <form onSubmit={ActualizarProducto}>
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

