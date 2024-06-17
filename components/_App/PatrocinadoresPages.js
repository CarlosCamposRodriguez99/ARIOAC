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
								<div className="member-social-links">
									<Link href="https://brivesoluciones.com/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=5512954442&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20Brive" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/brive-soluciones/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="likedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>Brivé</h5>
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
								<div className="member-social-links">
									<Link href="https://www.sivale.mx/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://www.linkedin.com/company/upsivale/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>Up sí vale</h5>
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
								<div className="member-social-links">
									<Link href="https://tergum.com.mx/index.html" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=3316048746&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20Tergum" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/tergum-méxico/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>Tergum</h5>
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
								<div className="member-social-links">
									<Link href="https://www.minu.mx/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=3336679437&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20Minu" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/minuservicios/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>Minu</h5>
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
								<div className="member-social-links">
									<Link href="https://home.welbecare.com/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=5562095511&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20Welbe" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/welbe-care/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>Welbe</h5>
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
								<div className="member-social-links">
									<Link href="https://uvm-for-business.uvm.mx/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=7221663240&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20UVM%20for%20Business" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/uvm-for-business/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>UVM</h5>
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
						<img src="/img/patroci/meddi.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-social-links">
									<Link href="https://meddi.com.mx/" target="_blank">
										<img src="/img/iconos/www.svg" alt="www" className="social-icon"/>
									</Link>
									<Link href="https://api.whatsapp.com/send?phone=3333480545&text=%C2%A1Hola!%20Te%20damos%20la%20bienvenida%20a%20MEDDI" target="_blank">
										<img src="/img/iconos/whats.svg" alt="whatsapp" className="fa fa-whatsapp"/>
									</Link>
									<Link href="https://www.linkedin.com/company/meddi/" target="_blank">
										<img src="/img/iconos/linke.svg" alt="linkedin" className="fa fa-linkedin"/>
									</Link>
								</div>
								<div className="member-info">
									<h5>MEDDI</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/rh.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-social-links">
									
								</div>
								<div className="member-info">
									<h5>REVISTA CONEXION RH</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-3 col-md-3">
				<div className="member">
					<div className="member-img">
						<img src="/img/patroci/ideal.png" alt="member"/>
						<div className="member-overlay">
							<div className="member-social">
								<div className="member-social-links">
									
								</div>
								<div className="member-info">
									<h5>IDEAL JOBS</h5>
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