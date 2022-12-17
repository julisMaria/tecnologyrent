import React from "react";
import footer from '../img/footer.png';

export const CompFooter = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                Más Información
            </div>
            <div className="card-body">
                <h5 className="card-title">Redes Sociales</h5>
                <p className="card-text">Correo: xmeneses03@hotmail.com</p>
                <img src={footer} className="App-logo1" alt="logo"></img>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer text-muted">
                lunes - viernes / horario 8:00 - 19:00
            </div>
        </div>)
}