import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Section = () => {
  return (
  <React.Fragment>
    
  <div className="gray-background" style={{marginTop: "30px", marginBottom: "30px"}}>
  <div className="row gutter-lg" style={{marginBottom: "5px", marginTop: "5px", backgroundColor: "#fff"}}>
    <div className="col-md-5 col-sm-12" style={{padding: "0", margin: "0"}}>
      <div style={{padding: "0", margin: "0"}}>
        <div style={{padding: "0", margin: "0"}}>
          <div style={{padding: "0", margin: "0"}}>
            <div style={{padding: "0", marginBottom: "auto"}}>
              <Image width={960} height={680} src='/img/section/ari.png' alt='fabricamos-suplementos-maquilas-y-suplementos' loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-7 col-sm-12">
      <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
        <div className='seccionTitle'>
          <div>
            <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Principales temas a tratar</h1>
            <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
            <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>En ARIOAC nos enfocamos en los siguientes temas</h3>
            <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
          </div>
          <div>
            <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Nuevas tecnologías en el análisis de mercado, Beneficios en tiempos de cambio, Reinvención de Capital Humano ante la nueva normalidad, Desempeño alineado a la compensación, Economía y remuneración, La compensación alineada a las nuevas reformas laborales. </p>
          </div>

          <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
            <Link href="/servicios" passHref={true} legacyBehavior>
                <a className="default-btn">
                    VER CONFERENCIAS
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
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>NUESTRAS MEMBRESIAS</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='botonSeccionTop' style={{marginTop: "30px"}}>
              <Link href="/servicios" passHref={true} legacyBehavior>
                <a className="default-btn">
                  VER MEMBRESIAS
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
                <Image width={960} height={680} src='/img/section/zac.jpg' alt='envasado-de-productos-maquilas-y-suplementos' loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </React.Fragment>
  );
};

export default Section;