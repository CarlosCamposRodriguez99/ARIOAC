import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServiciosPage = () => {

  return (
  <React.Fragment>
      <div className="gray-background">
      <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
        <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", margin: "0"}}>
              <div style={{padding: "0", margin: "0"}}>
                <div style={{padding: "0", marginBottom: "auto"}}>
                  <Image width={960} height={680} src='/img/section/fabricacionSection.jpg' alt='fabricacion-de-maquilas-y-suplementos' loading='lazy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
            <div className='seccionTitle'>
              <div>
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Conferencias Magistrales</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Tendencias globales de bienestar financiero
</h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc. Nullam tristique libero ac augue congue, eget bibendum lacus lobortis.  vitae magna eu tortor varius aliquet nec ac mauris. Integer volutpat quam vitae justo aliquet, vitae fermentum orci laoreet. Vivamus ullamcorper risus ut fermentum fringilla. Integer sit amet mauris id odio ultrices elementum. In hac habitasse platea
                    <br/>Vivamus vitae magna eu tortor varius aliquet nec ac mauris. Integer volutpat quam vitae justo aliquet, vitae fermentum orci laoreet.<br/>Te apoyamos desde la creación hasta el envasado de tu producto.</p>
              </div>

              <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
                <Link href="/contact" passHref={true} legacyBehavior>
                    <a className="default-btn">
                        PARTICIPA Y GANA
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>EQUILIBRIO SOSTENIBLE</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Equilibrio sostenible en la compensación: puestos, personas y medio ambiente</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                     <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
              <Link href="/contact" passHref={true} legacyBehavior>
                <a className="default-btn">
                  CONCURSA
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
                <Image width={960} height={680} src='/img/section/envasado.jpg' alt='envasado-de-productos-maquilas-y-suplementos' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gray-background">
      <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
        <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", margin: "0"}}>
              <div style={{padding: "0", margin: "0"}}>
                <div style={{padding: "0", marginBottom: "auto"}}>
                  <Image width={960} height={680} src='/img/section/taponado.jpg' alt='taponado-y-cerrado-de-envases-maquilas-y-suplementos' loading='lazy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
            <div className='seccionTitle'>
              <div>
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>El futuro de las compensaciones y su transformación digital</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc
                </h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
                </p>
              </div>

              <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
                <Link href="/contact" passHref={true} legacyBehavior>
                    <a className="default-btn">
                        CONTÁCTANOS
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Desafíos y beneficios laborales en materia de compensaciones de cara al 2024</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc
              </h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, turpis quis tincidunt consequat, eros arcu tempor orci, non ultrices ex purus at nunc.
              </p>
            </div>
            <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
              <Link href="/contact" passHref={true} legacyBehavior>
                <a className="default-btn">
                  INICIA CON NOSOTROS
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
                <Image width={960} height={680} src='/img/section/etiquetado.jpg' alt='etiquetado-maquilas-y-suplementos' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="gray-background">
      <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
        <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", margin: "0"}}>
              <div style={{padding: "0", margin: "0"}}>
                <div style={{padding: "0", marginBottom: "auto"}}>
                  <Image width={960} height={680} src='/img/section/lotificado.jpg' alt='lotificado-impresion-de-caducidad-y-lote-maquilas-y-suplementos' loading='lazy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
            <div className='seccionTitle'>
              <div>
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Compensación flexible y tokenización</h1>
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
                        ESCRÍBENOS
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>6 retos de compensaciones en el nearshoring</h1>
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
                <Image width={960} height={680} src='/img/section/encapsulado.jpg' alt='encapsulado-de-liquidos-polvos-maquilas-y-suplementos' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
        <h3 className="title">ARIOAC</h3>
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