import React from "react";
import img from '../img/img.jpg'

export const CompNav = () => {
    return (
        <div>
            {/* <header className="container"> */}
                {/* <img src={img} className="App-logo" alt="logo"></img>
                <h1>
                    TECNOLOGY RENT
                </h1> */}

                <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" id="navegacion">
                        <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo'  />
                        <small className="fs-4" id="titulo-header"> MisiónTic </small>
                    </a>
                {/* <h2>Tecnology Rent</h2> */}

                
                    <ul className="nav nav-pills" id="ul-menu">
                        <li className="nav-item"><a href="/" className="nav-link" data-toggle="button">Inicio</a></li>
                        <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
                        <li className="nav-item"><a href="/clientes" className="nav-link">Clientes</a></li>
                        <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
                        <li className="nav-item"><a href="/solicitudes" className="nav-link">Solicitudes</a></li>
                    </ul>

                </nav>
                <script>
                    
                </script>


                {/* <nav className="nav-header">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src="https://misiontic2022.mintic.gov.co/mt2022/assets/assets/images/logo-mision.png" style={{ height: 32 }} alt='logo' />
                        </a>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">Min Tic 2022</a>
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="/" role="tab" aria-controls="nav-home" aria-selected="true">Inicio</a>
                        <a className="nav-item nav-link" id="nav-productos-tab" data-toggle="tab" href="/productos" role="tab" aria-controls="nav-profile" aria-selected="false">Productos</a>
                        <a className="nav-item nav-link" id="nav-clientes-tab" data-toggle="tab" href="/clientes" role="tab" aria-controls="nav-contact" aria-selected="false">Clientes</a>
                        <a className="nav-item nav-link" id="nav-proveedores-tab" data-toggle="tab" href="/proveedores" role="tab" aria-controls="nav-contact" aria-selected="false">Proveedores</a>
                        <a className="nav-item nav-link" id="nav-solicitudes-tab" data-toggle="tab" href="/solicitudes" role="tab" aria-controls="nav-contact" aria-selected="false">Solicitudes</a>

                    </div>
                </nav> */}
                {/* <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> <p id="parrafo">¡Rentamos los equipos que su empresa necesite, tenemos un servicio adaptable a tus necesidades!</p></div>
                    <div className="tab-pane fade " id="nav-productos" role="tabpanel" aria-labelledby="nav-profile-tab"><p id="parrafo">¡Rentamos loservicio adaptable a tus necesidades!</p></div>
                    <div className="tab-pane fade" id="nav-clientes" role="tabpanel" aria-labelledby="nav-clientes-tab">...</div>
                </div> */}
                <img src={img} className="App-logo" alt="logo"></img>

            {/* </header> */}
        </div >
    )
}