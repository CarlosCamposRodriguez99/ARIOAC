import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PatrocinadoresPages = () => {

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

	 /*  const handleImageClick = (sponsorName) => {
		// Obtener el elemento de las redes sociales del patrocinador haciendo referencia al nombre del patrocinador
		const socialLinks = document.querySelector(`#${sponsorName}-social-links`);
		// Alternar la clase 'show' para mostrar u ocultar las redes sociales
		socialLinks.classList.toggle('show');
	  };  */
	
  return (
  <React.Fragment>

<section id="team4" className="team team-4 bg-white pt-0 pb-0 mt-3">
	<div className="container-fluid pr-0 pl-0">
		<div className="row text-center mx-auto">

			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/brive.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
								    <div className="member-social-links">
									<img src="/img/iconos/www.svg" alt="www" style={{width: "36px", height: "36px", cursor: "pointer"}} />
										<a src="" href="https://brivesoluciones.com/" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="https://wa.me/${5512954442}?text=${encodeURIComponent(message)}" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/company/brive-soluciones/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>Brivé</h5>
										<h6></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/up.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
								<div className="member-social-links">
										<a src="" href="https://www.sivale.mx/" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="5580098684" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/company/upsivale/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>Up sí vale</h5>
										<h6></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/tergum.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
								<div className="member-social-links">
										<a src="" href="https://tergum.com.mx/index.html" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="3316048746" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/company/tergum-méxico/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>Tergum</h5>
										<h6></h6>
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
     
<section id="team4" className="team team-4 bg-white pt-0 pb-0">
	<div className="container-fluid pr-0 pl-0">
		<div className="row text-center mx-auto">

			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/minu.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
									<div className="member-social-links">
										<a src="" href="https://www.minu.mx/" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="3336679437" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/company/minuservicios/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>Minu</h5>
										<h6></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/welbe.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
									<div className="member-social-links">
										<a src="" href="https://home.welbecare.com/" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="5562095511" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/company/welbe-care/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>Welbe</h5>
										<h6></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/uvm.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-data">
									<div className="member-social-links">
										<a src="" href="https://uvm.mx/" target='_blank'><i className="fa fa-facebook"></i></a>
										<a src="" href="7721663240" target='_blank'><i className="fa fa-twitter"></i></a>
										<a src="" href="https://www.linkedin.com/school/uvmmx/" target='_blank'><i className="fa fa-linkedin"></i></a>
									</div>
									<div className="member-info">
										<h5>UVM</h5>
										<h6></h6>
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
					    <img src='/img/logoarioac.png' alt='youtube' width="300px" height="100px" />  	
							<p className='noneYoutube' style={{ textAlign: "left", fontFamily: 'Montserrat, sans-serif', marginTop: "20px", marginBottom: "40px", fontSize: "16px" }}>
							
							<br />
							</p>
					{/* 	<a
							href="https://www.tiktok.com/@arioac"
							target="_blank"
							className="element-button"
							>
							
							</a>  */}
						</div>
						</div>
					</section>
		</div>

    </React.Fragment>
  )
}

export default PatrocinadoresPages