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
   {/*    <div className="gray-background">
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
    </div>  */}
  

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
        
					<div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className=" pos-vertical-center">
                    <p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Experiencia diversificada en sectores económicos. Capacité a más de 3000 profesionales en LinkedIn y negocios, ofreciendo soluciones prácticas y éticas en situaciones complejas para beneficio mutuo."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Dunnia Vargas González</h5>
								<h6>Top Career Counseling Voice LinkedIn</h6>
                                <h7>Dunnia Vargas</h7>
							</div>
						</div>

                        <div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Administrador de Empresas especializado en Desarrollo Humano y autor de 'El Lenguaje de los Colores'. Fundador de THT, empresa multinacional que ha entrenado a más de 15,000 directivos y mejorado procesos para 5 millones de personas en 13 países."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Juan David Gómez</h5>
								<h6>Fundador de la Multinacional THT</h6>
                                <h7>Mentor de Carrera</h7>
							</div>
						</div>

					<div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Con 20 años en roles ejecutivos en empresas globales, liderando equipos en IT y Supply Chain, me convertí en agente de transformación hace 6 años. Enfocado en Liderazgo Trascendental & Maestría Personal, he impactado a más de 3,500 personas y 130 empresas como mentor y conferencista, inspirando crecimiento."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Héctor Munguía</h5>
								<h6>Coach, Conferencista, Entrenador Ejecutivo y Escritor</h6>
                                <h7>Héctor Munguía</h7>
							</div>
						</div>

					<div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Asesor en Condiciones Generales de Trabajo y Capacitación, Licenciado en Contabilidad Pública y Finanzas con más de 7 años de experiencia en asesoría laboral y financiera. Diplomados en contabilidad gerencia y contribuciones. Experiencia de más de 5 años en Grupo Cicadehp."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Angel Adrián Dávalos Granados</h5>
								<h6>Asesor de servicio en materia de Condiciones Generales de Trabajo, Capacitación y Adiestramiento</h6>
                                <h7>CICADEHP</h7>
							</div>
                        </div>
			
					<div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Líder apasionada y experimentada en calidad y seguridad de la información, con más de 20 años de experiencia en normas ISO 9001 e ISO 27001. Su trayectoria refleja un compromiso constante con la excelencia, evidenciado por las numerosas certificaciones presenciadas, que representan el compromiso de las organizaciones hacia la calidad y la eficiencia operativa."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Erika Chavero</h5>
								<h6>Gerente de Sistemas de Gestión</h6>
                                <h7>ORIENTA</h7>
							</div>
						</div>

					<div className="memberConfe">
							<div className="memberConfe-img">
								<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
								<div className="memberConfe-overlay">
									<div className="memberConfe-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Como profesional de Recursos Humanos, mi experiencia es aportar valor y visión global del Departamento y ayudar a la organización a optimizar y mejorar sus recursos a través del análisis de datos. Siendo esencial abordar la medición y mejora del desempeño a través de evaluaciones estructuradas en función de los objetivos estratégicos corporativos."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="memberConfe-info">
								<h5>Marcos Alonso</h5>
								<h6>HR Director</h6>
                                <h7>BOLLHOFF</h7>
							</div>
						</div>

					     <div className="memberConfe">
											<div className="memberConfe-img">
												<img src="/img/conferencistas/1.jpg" alt="memberConfe"/>
												<div className="memberConfe-overlay">
													<div className="memberConfe-social">
														<div className=" pos-vertical-center">
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Psicóloga de la UIA con 25 años de experiencia en RH para empresas nacionales y trasnacionales. Instructura en competencias directivas y de liderazgo por más de 12 años, a través de programas de coaching ejecutivo y de equipos de trabajo. Certificada por la ACMC, la ICT y el Tec de Monterrey, con una maestría en Psicoterapia Gestalt y un curso en Liderazgo para Mujeres."</p>
														</div>
													</div>
												</div>
											</div>
											<div className="memberConfe-info">
												<h5>Valeria Ramírez</h5>
												<h6>Consultora Experta</h6>
								                <h7>CONTUR</h7>
											</div>
										</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			{/*	<section id="team2" className="team team-2 bg-white">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12">
							<div id="team-carousel" className="carousel-dots">
					
								<div className="member">
										<div className="member-img">
											<img src="/img/patroci/uvm.png" alt="member"/>
											<div className="member-overlay">
												<div className="member-social">
													<div className=" pos-vertical-center">
								<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Administrador de Empresas especializado en Gestión de Capital Humano, con estudios en Desarrollo Organizacional y Maestría en Capital Humano. Con más de 12 años de experiencia en Recursos Humanos, he sido Director en empresas como TV Azteca, Total Play, AT&T y UVM. Destaco por implementar estrategias innovadoras en Desarrollo de Talento y Employer Branding."</p>
													</div>
												</div>
											</div>
										</div>
							<div className="member-info">
								<h5>Fernando Hernández Chávez</h5>
								<h6>Director Nacional de UVM for Business</h6>
                                <h7>UVM for Business</h7>
							</div>
						</div>

                        <div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Licenciado en Comunicación Organizacional y Maestro en Administración y Dirección por la Universidad Madero de Puebla. Ha ocupado roles de gestión en marketing, comunicación corporativa y capital humano en empresas nacionales y transnacionales, impulsando la implementación de procesos y políticas para mejorar su desempeño y bienestar organizacional."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Jerico Jaramillo</h5>
								<h6>Director división de Atracción de Talento Workus</h6>
                                <h7>Tergum</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className="pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Ingeniero en Computación con maestría y doctorado en Desarrollo Organizacional, fundador de CONSIGNEA, empresa de capacitación y coaching. Certificado como Master Coach y Facilitador en programas gerenciales, ha colaborado con empresas como BMW, VW, FCA, SEAT, L'Oreal, entre otras."</p>
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
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Psicóloga con diez años de experiencia en talento, aprendizaje y desarrollo, ella es Gerente de Programas Globales de Aprendizaje y Desarrollo en Driscoll's. Lidera programas de mentoría y conocimiento empresarial a nivel global con el propósito de inspirar a otros en su crecimiento personal y profesional."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Andrea Vega</h5>
								<h6>L&D Global Program Manager</h6>
                                <h7>DRISCOLL'S</h7>
							</div>
                        </div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Periodista con estudios en administración y finanzas. Director ejecutivo de Fundación Iguales desde 2015. Fundador de Pride Connection Chile y Factor Diverso, consultora en diversidad e inclusión. Expositor en más de 150 empresas en Chile y 14 países de la región."</p>
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
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>""</p>
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
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Licenciado en Comunicación y Clima Organizacional con 15 Certificaciones Internacionales en Aprendizaje, Desarrollo Organizacional y Liderazgo, incluyendo MBTI, Diagnóstico y Diseño de Cultura. Actualmente, Director en MEJORAR MEXICO y Presidente de la Fundación de la JCI México, afiliada a la JCI."</p>
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
</section> */}


			{/*	<section id="team2" className="team team-2 bg-white">
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
                    <p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Con más de 30 años de experiencia internacional en más de 20 países, lideré la transformación digital e innovación en ambientes multiculturales. Actualmente, soy responsable de Transformación Digital y Ciberseguridad para Latinoamérica en Mondelez, contribuyendo globalmente a la seguridad."</p>
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
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Consultor en Recursos Humanos con 20 años de experiencia en transformación digital y talento. Trabajó en Grupo GAVIOTA y ahora es socio en PYMEHR. Fundó el Instituto de Employer Branding y el Podcast Marca Talento. Su lema es 'Una empresa sin personas es un edificio', y su hashtag es #NoWorkingDead."</p>
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
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>""</p>
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
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Catedrático en la Universidad Anáhuac y CEO de Empíreo Consulting. Fundador y rector de Orquesta Business Institute, una edtech en certificación laboral. Ofrece programas innovadores inspirados en inteligencia emocional."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Pablo Martínez del Castillo</h5>
								<h6>Director General</h6>
                                <h7>Orquesta</h7>
							</div>
                        </div>
			
					<div className="member">
							<div className="member-img">
								<img src="/img/conferencistas/1.jpg" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Licenciado en Ciencias Computacionales e Informática, con especialización en Programación Neuro Lingüística avalada por John Grinder.Tengo experiencia en roles de tecnología para empresas como Cerrey, Vitro, Fenasa Corporativo, Metalsa, Femsa y Ternium. Autor del libro 'La perversidad de los cursos empresariales y personales: ¿Cómo enfrentarla y ganar?"</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Humberto Gutiérrez</h5>
								<h6>Socio de Prometeo Ultra Group S.A</h6>
                                <h7>TrainingWhiz</h7>
							</div>
						</div>

					<div className="member">
							<div className="member-img">
								<img src="/img/patroci/welbe.png" alt="member"/>
								<div className="member-overlay">
									<div className="member-social">
										<div className=" pos-vertical-center">
										<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>"Con una sólida trayectoria en estudios hispánicos y salud ocupacional, me destaco como Coordinador de Operaciones Área Médica en Welbe, líder en atención de salud ocupacional. Mi experiencia incluye la publicación de artículos en congresos y coloquios sobre literatura española y teatro quijotesco, así como la participación en proyectos de investigación y colaboración en iniciativas académicas."</p>
										</div>
									</div>
								</div>
							</div>
							<div className="member-info">
								<h5>Emmanuel Cervantes Rodríguez</h5>
								<h6>Coordinador de Operaciones Área Médica</h6>
                                <h7>Welbe</h7>
							</div>
						</div>

					     <div className="member">
											<div className="member-img">
												<img src="/img/patroci/brive.png" alt="member"/>
												<div className="member-overlay">
													<div className="member-social">
														<div className=" pos-vertical-center">
														<p style={{ color: 'white', fontFamily: 'Palatino, serif', fontSize: '15px' }}>""</p>
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
</section> */}

				

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