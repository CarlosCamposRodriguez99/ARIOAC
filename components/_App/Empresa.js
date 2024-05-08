import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Empresa = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // Actualiza esto con el número total de miembros del equipo

  const handleGoLeft = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const handleGoRight = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

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
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>EVENTO HR WEEK</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}> EVENTO EN LÍNEA </h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci.
                <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>

              <div className='botonSeccionBottom' style={{marginTop: "20px"}}>
                <Link href="https://www.tiktok.com/@arioac?_t=8lTOZbPZmB4&_r=1" legacyBehavior>
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
					<p className="heading--subtitle"></p>
					<h2 className="heading--title">CONFERENCISTAS</h2>
		
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
                    <p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Dunnia Vargas González</h5>
								<h6>Top Career Counseling Voice LinkedIn</h6>
                                <h7>Especialista en Linkedin y Mentora de Carrera</h7>
							</div>
						</div>

                        <div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Juan David Gómez</h5>
								<h6>Fundador de la Multinacional THT</h6>
                                <h7>Mentor de Carrera</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Héctor Munguía</h5>
								<h6>Coach, Conferencista, Entrenador Ejecutivo y Escritor</h6>
                                <h7>Héctor Munguía</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Angel Adrián Dávalos Granados</h5>
								<h6>Asesor de servicio en materia de Condiciones Generales de Trabajo, Capacitación y Adiestramiento</h6>
                                <h7>CICADEHP</h7>
							</div>
                        </div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Adriana Acalá Ruíz</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Marcos Alonso</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					     <div className="member">
											<div className="member-img">
												<img src="/img/conferencistas/1.jpg" alt="member"/>
												<div className="member-overlay">
													<div className="member-social">
														<div className=" pos-vertical-center">
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
														</div>
													</div>
												</div>
											</div>
											<div className="member-info">
												<h5>PENDIENTE</h5>
												<h6></h6>
								                <h7></h7>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="team2" className="team team-2 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12">
							<div id="team-carousel" className="carousel-dots">
					
								<div className="member">
										<div className="member-img">
											<img src="/img/conferencistas/1.jpg" alt="member"/>
											<div className="member-overlay">
												<div className="member-social">
													<div className=" pos-vertical-center">
								<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
													</div>
												</div>
											</div>
										</div>
							<div className="member-info">
								<h5>UVM</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

                        <div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>PENDIENTE</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Alberto Murillo</h5>
								<h6>Fundador</h6>
                                <h7>CONSIGNEA</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Andrea Vega</h5>
								<h6>L&D Global Program Manager</h6>
                                <h7>DIRSCOLLS</h7>
							</div>
                        </div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Emilio Maldonado Quevedo</h5>
								<h6>Director General</h6>
                                <h7>Factor Diverso</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/patroci/up.png" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>UP sí vale</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					     <div className="member">
											<div className="member-img">
												<img src="/img/conferencistas/1.jpg" alt="member"/>
												<div className="member-overlay">
													<div className="member-social">
														<div className=" pos-vertical-center">
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
														</div>
													</div>
												</div>
											</div>
											<div className="member-info">
												<h5>Daniel Garza Leal</h5>
												<h6>Director de Relaciones y Negocios de MEJORAR MÉXICO</h6>
								                <h7>MEJORAR MÉXICO</h7>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</section>


				<section id="team2" className="team team-2 bg-white">
	<div className="container">
		
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12">
				<div id="team-carousel" className="carousel-dots">
        
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
                    <p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Yami Hagg</h5>
								<h6>Responsable de Transformación Digital y Ciberseguridad para Latinoamérica</h6>
                                <h7>Mondelēz</h7>
							</div>
						</div>

                        <div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Rubén Montesinos</h5>
								<h6>Fundador</h6>
                                <h7>Instituto de Employer Branding</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/patroci/tergum.png" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Tergum</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Pablo Martínez del Castillo</h5>
								<h6>Director General</h6>
                                <h7>Empireo</h7>
							</div>
                        </div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Humberto Gutiérrez</h5>
								<h6>Socio de Prometeo Ultra Group S.A</h6>
                                <h7>Trainingwhiz</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/patroci/welbe.png" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Welbe</h5>
								<h6></h6>
                                <h7></h7>
							</div>
						</div>

					     <div className="member">
											<div className="member-img">
												<img src="/img/patroci/brive.png" alt="member"/>
												<div className="member-overlay">
													<div className="member-social">
														<div className=" pos-vertical-center">
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nulla. Vivamus id commodo velit. Vestibulum eu justo consequat, pulvinar justo nec, convallis ligula. Morbi dignissim tortor in posuere feugiat. Integer gravida, ante eget volutpat fermentum, tortor risus maximus sem, id lobortis nulla libero non ex. "</p>
														</div>
													</div>
												</div>
											</div>
											<div className="member-info">
												<h5>Brivé</h5>
												<h6></h6>
								                <h7></h7>
											</div>
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