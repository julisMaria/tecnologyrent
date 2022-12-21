import React from "react";
import imac from '../img/imac.jpg'
import impresora from '../img/impresora.jpg'
// import portatil from '../img/portatil.jpg'
import macbook from '../img/macbook.jpg'


export const CompInicio = () => {
    return (
        <div className="container" id="inicio">
            {/* <h1>TECNOLOGY RENT</h1> */}

            <div className="jumbotron" id="servicios">
                <h1 className="display-4">TECNOLOGY RENT</h1>
                <p className="lead">¡Rentamos los equipos que su empresa necesite, tenemos un servicio adaptable a tus necesidades!</p>
                <hr className="my-4"></hr>
                <p>La mejor alternativa para ahorrar y no parar de producir. Incluido en todos nuestros equipos.</p>

                <a className="btn btn-primary btn-lg" href="#info" role="button">Ver más</a>

            </div>

            <div id="sections">
                <section id="frontend">
                    <h2 className="titulo"> Nuestros servicios </h2>
                    <article className="article">
                        <p>
                            {/* <a href="#">Titulo de la entrada</a> */}
                            ​La solución perfecta cuando necesita acceder de manera rápida y flexible a tecnologías corporativas. En pocas horas hábiles puede acceder a herramientas básicas como computadores de escritorio, portátiles, impresoras, entre otros equipos. Puede contar con la flexibilidad de alquilar un equipo desde 8 días hasta 12 meses. Le brindamos solución a sus fallas e incidentes con un tiempo entre 4 a 12 horas.
                        </p>
                        <span className="date">[13-07-2021. Ximena M. Salamanca]</span>
                    </article>
                </section>
            </div>

            <div className="clearfix">
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src={imac} alt="logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Computadores de escritorio</h5>
                            <p className="card-text">Los computadores de mesa son ideales para el área de diseño o contabilidad de tu organización. Alquilamos diferentes tipos de equipos de escritorio de acuerdo a tu necesidad de espacio, entre los que se encuentran: All in ONe, Small for Factor, Tiny, Torre entre otros.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={impresora} alt="logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Impresoras</h5>
                            <p className="card-text">Nuestras impresoras láser o de matriz de punto y nuestro plan de funcionamiento, hacen que preocuparse por mantenimientos o reparaciones sean cosa del pasado.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={macbook} alt="logo"></img>
                        <div className="card-body">
                            <h5 className="card-title">Computadores portátiles</h5>
                            <p className="card-text">Te ofrecemos las mejores marcas del mercado tecnológico en el mundo para el alquiler de computadores portátiles que permitirán que tus trabajadores lleven al límite sus capacidades sin quedarse cortos con la capacidad del equipo. Manejamos marcas como Hp, Lenovo, Dell, Samsung, Toshiba y Apple.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="info">
                <h2 className="display-5">Beneficios</h2>
                <hr className="my-4"></hr>
                <div className="card-equipo">
                    <p>
                        {/* <a href="#">Titulo de la entrada</a> */}
                        Ejecutando actividades de gestión, instalación, optimización, prevención de fallas, mantenimiento preventivo, correctivo, mejora continua, soporte técnico, en los sistemas servidores utilizados, sus maquinas virtuales y servicios instalados así como el parque computacional que hace parte de su organización. ​El tiempo de alquiler es flexible, se podrá alquilar por meses o años, según las necesidades operativas y financieras de tu negocio.  
                    </p>
                </div>
            </div>
        </div>
    )
}