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

  return (
  <React.Fragment>

<section id="team4" className="team team-4 bg-white pt-0 pb-0">
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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
										<a href="#"><i className="fa fa-facebook"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
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

  {/*  <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Nuestros patrocinadores</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc
              </h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
              <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
              </p>
            </div>
            <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
              <Link href="/contact" passHref={true} legacyBehavior>
                <a className="default-btn">
                ÚNETE
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5 col-sm-12">
        <div>
          <div>
            <div>
              <div>
                <Image width={960} height={680} src='/img/section/encapsulado.jpg' alt='arioac' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */} 

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