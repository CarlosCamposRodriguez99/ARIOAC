import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Empresa = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    '/img/section/1.jpg',
    '/img/section/2.jpg',
    '/img/section/3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia este valor (en milisegundos) para ajustar el intervalo de cambio de imagen

    return () => clearInterval(interval);
  }, [images.length]);

  return (
  <React.Fragment>
      <div className="gray-background">
      <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
        <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", margin: "0"}}>
              <div style={{padding: "0", margin: "0"}}>
                <div style={{padding: "0", marginBottom: "auto"}}>
                  <Image width={2536} height={1686} src='/img/section/capsulas.jpg' alt='arioac' loading='lazy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
            <div className='seccionTitle'>
              <div>
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>EVENTO PRESENCIAL</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Sede:
                              Hotel Barceló Guadalajara,
                              Av. De las Rosas 2933, Col. Verde Valle, C.P. 44530, Guadalajara, Jalisco.
                </h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Sede:
                                   Hotel Barceló Guadalajara,
                                   Av. De las Rosas 2933, Col. Verde Valle, C.P. 44530, Guadalajara, Jalisco.
                <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>

              <div className='botonSeccionBottom' style={{marginTop: "20px"}}>
                <Link href="/servicios" legacyBehavior>
                    <a className="default-btn">
                        VER
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <section id="team2" className="team team-2 bg-white">
	<div className="container">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12">
				<div className="heading heading-2 text-center mb-50">
					<p className="heading--subtitle">Creative & Talented</p>
					<h2 className="heading--title">Meet The Team</h2>
					<div className="divider--line">
						<i className="divider divider--1"></i>
						<i className="divider divider--2"></i>
						<i className="divider divider--3"></i>
						<i className="divider divider--4"></i>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12">
				<div id="team-carousel" className="carousel-dots">
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Ahmed Abd Alhaleem</h5>
								<h6>Graphic Designer</h6>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Ahmed Hassan</h5>
								<h6>Web Developer</h6>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Mohamed Habaza</h5>
								<h6>Lead Dev Ops</h6>
							</div>
						</div>


					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Amr Gamal Sadeq</h5>
								<h6>Design expert</h6>
							</div>
						</div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Ahmed Hassan</h5>
								<h6>Web Developer</h6>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Mohamed Habaza</h5>
								<h6>Lead Dev Ops</h6>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</section>

  <section id="number1" className="number number-1 bg-white pb-100">
      <div className="container">
      <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}}>
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <div className="text--center heading heading--2 mb-40 heading--desc">
              <h1 className="heading--title">CONFERENCISTAS</h1>
              <div style={{borderBottom: "3px solid #1C9CD9", width: "50px", margin: "0 auto"}}></div>
              <p className="heading--desc espacio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="number-panel">
              <div className="number--img">
                <Image width={356} height={356} className='border4' src="/img/new-section/1.jpg" alt="suplementos-maquila-y-suplementos" loading='lazy'/>
              </div>
              <div className="number--content heading--desc">
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>Ana Maria Márquez</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="number-panel">
              <div className="number--img">
                <Image width={356} height={356} className='border4' src="/img/new-section/2.jpg" alt="cosmeticos-maquilas-y-suplementos" loading='lazy'/>
              </div>
              <div className="number--content heading--desc">
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>Juan Pablo Rodríguez</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="number-panel">
              <div className="number--img">
                <Image width={356} height={356} className='border4' src="/img/new-section/3.jpg" alt="sachet-maquilas-y-suplementos" loading='lazy'/>
              </div>
              <div className="number--content heading--desc">
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>Sebastián Hurtado Gómez</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

  <div className="element-container">
  <section className="element-section">
    <div className="element-image">
      <Image 
        width={1920}
        height={700}
        className='imageYoutube'
        decoding="async"
        src={images[imageIndex]}
        alt="suplementos-alimenticios-youtube"
        loading='lazy'
      />
      <div className="element-content" style={{ textAlign: "centert", maxWidth: "100%", marginRight: "30px" }}>
        <h3 className='titleYoutube' style={{ color: "#000", marginBottom: "5px", marginTop: "50px" }}></h3>
        <img src='/img/redes-sociales/tik-02.svg' alt='youtube' width="300px" height="100px" />
        <p className='noneYoutube' style={{ textAlign: "left", fontFamily: 'Montserrat, sans-serif', marginTop: "20px", marginBottom: "40px", fontSize: "16px" }}>
        VISITA NUESTRO TIKTOK Y ÚNETE AL EVENTO
        <br />
        </p>
        <a
          href="https://www.tiktok.com/@arioac"
          target="_blank"
          className="element-button"
        >
          Visitar TikTok
        </a>
      </div>
    </div>
  </section>
</div>


    </React.Fragment>
  )
}

export default Empresa