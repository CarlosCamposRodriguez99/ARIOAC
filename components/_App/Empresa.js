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
                  <Image width={2536} height={1686} src='/img/section/capsulas.jpg' alt='capsulas maquila y suplementos' loading='lazy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
            <div className='seccionTitle'>
              <div>
                <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>MAQUILAS Y SUPLEMENTOS</h1>
                <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
                <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>ENVASADO DE PRODUCTOS</h3>
                <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
              </div>
              <div>
                <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Somos una empresa mexicana que se dedica a la fabricación de suplementos alimenticios, vitaminas y productos cosméticos.<br/>Disponemos de una amplia experiencia en la maquila y el envasado de productos para diferentes marcas y todo tipo de proyectos que requieran darle la mejor presentación a tu producto.</p>
              </div>

              <div className='botonSeccionBottom' style={{marginTop: "20px"}}>
                <Link href="/sevicios" legacyBehavior>
                    <a className="default-btn">
                        VER SERVICIOS
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  <section id="number1" className="number number-1 bg-white pb-100">
      <div className="container">
      <div style={{textAlign: "center", display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}}>
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <div className="text--center heading heading--2 mb-40 heading--desc">
              <h1 className="heading--title">MAQUILAMOS PRODUCTOS PARA LAS SIGUIENTES INDUSTRIAS</h1>
              <div style={{borderBottom: "3px solid #1C9CD9", width: "50px", margin: "0 auto"}}></div>
              <p className="heading--desc espacio">Desarrollamos cualquier proyecto que nos proponga ajustándonos a sus necesidades de producción.</p>
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
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>SUPLEMENTOS</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Fabricamos todo tipo de suplementos nutricionales, como lo son productos de nutrición deportiva, nutricosméticos, multivitamínicos y minerales específicos. Garantizamos un producto impecable y con todas las garantías necesarias.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="number-panel">
              <div className="number--img">
                <Image width={356} height={356} className='border4' src="/img/new-section/2.jpg" alt="cosmeticos-maquilas-y-suplementos" loading='lazy'/>
              </div>
              <div className="number--content heading--desc">
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>CÓSMETICOS</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Somos especialistas en la fabricación de productos cosméticos. Ofrecemos un servicio integral, con todo lo necesario para crear una marca de cosmética. Te asesoramos durante el proceso y entregamos el producto listo para su distribución al público final.</p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="number-panel">
              <div className="number--img">
                <Image width={356} height={356} className='border4' src="/img/new-section/3.jpg" alt="sachet-maquilas-y-suplementos" loading='lazy'/>
              </div>
              <div className="number--content heading--desc">
                <h3 style={{textAlign: "center", color: "#1C9CD9"}}>SACHETS</h3>
                <p style={{textAlign: "justify", fontSize: "17px"}}>Contamos con la maquinaria y personal necesario para fabricar sachets. Envasamos diferentes productos como cremas, pastas, shampoo, gel, fibras, polvos, proteínas, granulados, café, aceites y azúcar.</p>
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
      <div className="element-content" style={{ textAlign: "left", maxWidth: "100%", marginRight: "30px" }}>
        <h3 className='titleYoutube' style={{ color: "#fff", marginBottom: "30px", marginTop: "50px" }}>VISITA NUESTRO CANAL DE</h3>
        <img src='/img/section/youtube.png' alt='youtube' width="300px" height="100px" />
        <p className='noneYoutube' style={{ textAlign: "left", fontFamily: 'Montserrat, sans-serif', marginTop: "20px", marginBottom: "40px", fontSize: "16px" }}>
          Subscríbete a nuestro canal de Youtube y mira las últimas<br />novedades sobre nuestros productos y tecnologías.
        </p>
        <a
          href="https://www.youtube.com/channel/UCDE9JbKCb6TwOvJVIWH0M2w"
          target="_blank"
          className="element-button"
        >
          Visitar Canal
        </a>
      </div>
    </div>
  </section>
</div>


    </React.Fragment>
  )
}

export default Empresa