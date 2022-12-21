import React from "react";
import footer from '../img/footer.jpg';

export const CompFooter = () => {
    return (
        <div className="clearfix">
            <div id="footer">  
                    <h5 className="card-title">Redes Sociales</h5>
                    <p className="card-text">Correo: xmeneses03@hotmail.com</p>
                    <img src={footer} className="logo-footer" alt="logo"></img>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}         
            </div>
        </div>
    )
}