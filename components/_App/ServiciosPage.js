import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiciosPage = () => {
	const [filtro, setFiltro] = useState('*');
  
	const handleClick = (event, nuevoFiltro) => {
	  event.preventDefault();
	  setFiltro(nuevoFiltro);
	};

  return (
  <React.Fragment>

<section id="portfolio" className="portfolio portfolio-gallery portfolio-5col">
    <div className="container-fluid pr-0 pl-0">
        <div className="row portfolio-row">
            <div className="col-xs-12 col-sm-12 col-md-12 portfolio-filter">
                <ul className="list-inline mb-0">
                    <li><a className="active-filter" href="#" data-filter="*">Conferencias</a></li>
                    <li><a href="#" data-filter=".filter-branding" className="">17 Junio</a></li>
                    <li><a href="#" data-filter=".filter-packaging" className="">18 Junio</a></li>
                    <li><a href="#" data-filter=".filter-print" className="">19 Junio</a></li>
                    <li><a href="#" data-filter=".filter-web" className="">20 Junio</a></li>
                    <li><a href="#" data-filter=".filter-web" className="">21 Junio</a></li>
                </ul>
            </div>
        </div>

        {/* Contenedor de las imágenes */}
        <div className="row portfolio-items">
            {/* Imágenes */}
            <div className="col-xs-12 col d-flex flex-wrap justify-content-center">
                {/* Primera imagen */}
                <div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
                                        <h4><a href="#">Estrategias en LinkedIn: Potenciando tu Marca Empleadora y Personal</a></h4>
										<h5><a href='#'>Dunnia Vargas González, 9 AM, 1 hora con 10 minutos</a></h5>
									{/*	<h6><a href='#'>Dunnia Vargas González</a></h6> */}
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Repite este bloque para cada imagen */}

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Tecnología e Innovación en la Gestión del Talento</a></h4>
									<h5><a href='#'>Juan David Gómez, 10 AM, 1 hora con 11 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">De la adolescencia a la madurez organizacional: cómo crear ambientes con un mayor nivel de consciencia</a></h4>
									<h5><a href='#'>Héctor Munguía, 11 AM, 1 hora con 12 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Atención a Inspecciones en materia de Capacitación y Adiestramiento de la STPS</a></h4>
									<h5><a href='#'>Angel Adrian Dávalos Granados, 12 PM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Lunes</a>, <a href="#">17 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#"></a></h4>
									<h5><a href='#'>Adriana Acalá Ruíz, 9 AM, 1 hora con 10 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#"></a></h4>
									<h5><a href='#'>Marcos Alonso, 10 AM, 1 hora con 11 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#"></a></h4>
									<h5><a href='#'>PENDIENTE, 11 AM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#"></a></h4>
									<h5><a href='#'>UVM, 11:30 AM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia2.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#"></a></h4>
									<h5><a href='#'>PENDIENTE, 12 PM, Duracion?</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Martes</a>, <a href="#">18 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">People Analytics - El Futuro de RRHH</a></h4>
									<h5><a href='#'>Alberto Murillo, 9 AM, 1 hora con 10 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">¿Qué pueden enseñarnos los niños sobre la colaboración y el propósito en las empresas?</a></h4>
									<h5><a href='#'>Andrea Vega, 10 AM, 1 hora con 11 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>Emilio Maldonado Quevedo, 11 AM, 1 hora con 12 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia3.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>UP si vale, 12 PM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Miércoles</a>, <a href="#">19 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Quédate Conmigo. Las 3 Principales Causas de la Rotación de Personal</a></h4>
									<h5><a href='#'>Daniel Garza Leal, 9 AM, 1 hora con 10 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">La Inteligencia Artificial en tu trabajo futuro</a></h4>
									<h5><a href='#'>Yami Hagg, 10 AM, 1 hora con 11 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">Creando Empresas Magnéticas, atrae y fideliza el talento que necesita tu organización</a></h4>
									<h5><a href='#'>Rubén Montesinos, 11 AM, 1 hora con 12 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia4.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>Tergum, 12 PM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Jueves</a>, <a href="#">20 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">El liderazgo disruptivo que transforma: Inspirar, no intimidar</a></h4>
									<h5><a href='#'>Pablo Martínez del Castillo, 9 AM, 1 hora con 10 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">El microlearning salvación de R.H. y todos los demás</a></h4>
									<h5><a href='#'>Humberto Gutiérrez, 10 AM, 1 hora con 11 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>Welbe, 11 AM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

				<div className="portfolio-item filter-print">
                    <div className="portfolio--img">
                        <img src="/img/dia5.jpg" alt="img" />
                        <div className="portfolio--hover">
                            <div className="portfolio--action">
                                <div className="pos-vertical-center">
                                    <div className="portfolio--title">
									<h4><a href="#">PENDIENTE</a></h4>
									<h5><a href='#'>Brivé, 11:30 AM, 30 minutos</a></h5>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Viernes</a>, <a href="#">21 Junio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</section>



    {/* VIDEO SECTION */}

  <div className="video-container">
  {/* Video de fondo */}
    <video autoPlay loop muted playsInline className="background-video">
      <source src="/uploads/maquilas-y-suplementos.mp4" type="video/mp4" />
      <source src="/uploads/maquilas-y-suplementos.webm" type="video/webm" />
      <source src="/uploads/maquilas-y-suplementos.ogg" type="video/ogg" />
      Tu navegador no soporta el elemento de video.
    </video>
    {/* Fondo oscuro semitransparente */}
    <div className="video-overlay"></div>
    {/* Contenido */}
    <div className="content">
      <div className="title-container">
        <h3 className="title">HR WEEK</h3>
      </div>
      <div className="subheading">
        <h1 className="subheading-text">¡INSCRÍBETE AHORA!</h1>
      </div>
      <div className="description">
        <p className="description-text">Cupo limitado. Aparta tu lugar antes y aprovecha nuestra promoción.</p>
      </div>
      <div className="button">
        <a href="/contact" className="button-link">Inscribirse</a>
      </div>
    </div>
  </div>

    </React.Fragment>
  )
}

export default ServiciosPage