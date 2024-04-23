import React from 'react'
import Image from 'next/image';

const Galeria = () => {

  return (
    <React.Fragment>
         <div id="portfolio-all" className="row container" style={{padding: "30px", margin: "0 auto"}}>
		 <h1 style={{color: "#000", textAlign: "center", fontFamily: "Montserrat, sans-serif", marginBottom: "40px", marginTop: "-60px"}}>CONFERENCIAS MAGISTRALES</h1>
			
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-print imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/fabricacion.png" alt="arioac" loading='lazy'/>
                    <div className="portfolio-item">
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
                    </div> 
				</div>
			</div>
			
			
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-packaging imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/envasado.png" alt="arioac" loading='lazy'/>
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-branding imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/capsulas.png" alt="arioac" loading='lazy'/>
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-branding imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/cerradora.png" alt="arioac" loading='lazy'/>
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-print imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/etiquetadora.png" alt="arioac" loading='lazy'/>
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
	
			<div className="col-xs-12 col-sm-6 col-md-4 portfolio-item filter-branding imagen">
				<div className="portfolio--img">
					<Image width={720} height={720} src="/img/galeria/impresion.jpg" alt="arioac" loading='lazy'/>
					<div className="portfolio--hover">
						<div>
							<div className="pos-vertical-center">
								<div className="portfolio--title">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
    </React.Fragment>
  )
}

export default Galeria