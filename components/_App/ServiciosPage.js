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
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>FABRICACIÓN</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>ENVASADO DE SUPLEMENTOS ALIMENTICIOS</h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Contamos con una amplia experiencia en el desarrollo y fabricación de suplementos alimenticios.<br/>Desarrolla tu proyecto con herramientas modernas que te ayudan a dar carácter a tu marca.<br/>Te apoyamos desde la creación hasta el envasado de tu producto.</p>
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
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>ENVASADO DE PRODUCTOS</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>ENVASADO DE PRODUCTOS Y SUPLEMENTOS</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Contamos con la tecnología necesaria para la maquila de productos de todo tipo. Envasamos liquidos, polvos, viscosos, granulados y tubos depresibles.<br/>Somos especialistas en la maquila de tus productos cosmeticos y suplementos alimenticios.<br/>Nuestra producción cuida la calidad de tu producto siguiendo las medidas de inocuidad para cumplir los estándares que necesitas.</p>
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
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>CERRADO DE ENVASES</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>SELLADO Y CERRADO DE TUS ENVASES</h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Contamos con la mejor opción para el sellado y cerrado de tus envases. Automatiza tu proceso con una solución moderna que garantiza la seguridad de tus productos.</p>
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
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>ETIQUETADO</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>ETIQUETADO CON INFORMACIÓN NORMATIVA Y DE MARCA</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Personalizamos la presentación de tus envases con la información normativa y de marca para tus productos. Etiqueta tus productos con la información nutrimental y dale caracter a la imagen de tus productos gracias a nuestra maquila de etiquetado.</p>
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
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>IMPRESIÓN DE CADUCIDAD Y LOTE</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>MAQUILA DE LOTIFICADO Y CODIFICADO</h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Nos encargamos de la impresión del lote y fecha de caducidad de tus productos.<br/>Contamos con equipamiento que facilita la producción de tu proyecto utilizando maquila de lotificado y codificado moderna que se encarga de los detalles de tu producto.</p>
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
      </div>
    </div>

    <div className="row gutter-lg" style={{marginBottom: "50px", backgroundColor: "#fff"}}>
      <div className="col-md-7 col-sm-12">
        <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
          <div className='seccionTitle'>
            <div>
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>ENCAPSULADO</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>ENVASADOS DE LÍQUIDOS, POLVOS Y MÁS</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Contamos con el equipo necesario para el envasado de cápsulas.<br/>Encapsulamos todo tipo de insumos naturales ya sean harinas,  extractos secos, productos micropulverizados y aceites vegetales.</p>
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
        <h3 className="title">MAQUILA Y ENVASADO DE SUPLEMENTOS</h3>
      </div>
      <div className="subheading">
        <h1 className="subheading-text">CREA TU PROYECTO</h1>
      </div>
      <div className="description">
        <p className="description-text">Inicia con nosotros hoy y maquila tu proyecto con una empresa confiable. Seguimos las medidas más importantes de inocuidad y calidad que te garantizan resultados profesionales.</p>
      </div>
      <div className="button">
        <a href="/contact" className="button-link">Contáctanos</a>
      </div>
    </div>
  </div>

    


    </React.Fragment>
  )
}

export default ServiciosPage