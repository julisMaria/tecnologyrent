import axios from 'axios';  //sirve para hacer peticiones
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:5000/api/proveedores/'

const compMostrarProveedores = () => {
    const [proveedores, setProveedor] = useState([])
    useEffect(() => {
        getProveedores()
    }, []);

const getProveedores = async () => {
    const resul = await axios.get(URL)
    setProveedor(resul.data);
}

const eliminarProveedores = async(id) => {
    await axios.delete(`${URL}${id}`)
    getProveedores()
}


}

export default compMostrarProveedores;
