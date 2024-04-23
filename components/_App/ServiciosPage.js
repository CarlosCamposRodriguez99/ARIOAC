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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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
                                        <h4><a href="#">Tobby Branding</a></h4>
                                    </div>
                                    <div className="portfolio--cat">
                                        <a href="#">Branding</a>, <a href="#">branding</a>
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