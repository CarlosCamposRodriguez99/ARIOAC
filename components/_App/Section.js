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
              <Image width={960} height={680} src='/img/section/ari.png' alt='arioac' loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-7 col-sm-12">
      <div style={{marginLeft: "40px", marginTop: "30px", marginRight: "40px"}}>
        <div className='seccionTitle'>
          <div>
            <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>Encuentro con una de las comunidades más grandes de México</h1>
            <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
            <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>5 países participantes</h3>
            <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
          </div>
          <div>
            <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}> 
            <span className="flag-icon flag-icon-mx" src="/img/banderas/mexico.png"></span> México <br/>
            <span className="flag-icon flag-icon-cr" src="/img/banderas/mexico.png"></span> Costa Rica <br/>
            <span className="flag-icon flag-icon-es" src="/img/banderas/espana.png"></span> España <br/>
            <span className="flag-icon flag-icon-cl" src="/img/banderas/mexico.png"></span> Chile <br/>
            <span className="flag-icon flag-icon-ar" src="/img/banderas/mexico.png"></span> Argentina <br/>
            </p>
           </div>

          <div className='botonSeccionBottom' style={{marginTop: "30px"}}>
            <Link href="/empresa" passHref={true} legacyBehavior>
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
              <h1 style={{fontFamily: 'Montserrat, sans-serif', color: "#000", fontSize: "40px", textAlign: "left" }}>¡MOTIVOS PARA NO PERDÉRTELO!</h1>
              <div style={{borderBottom: "3px solid #696969", width: "57px", marginBottom: "25px", marginTop: "15px"}}></div>
              <h3 style={{fontFamily: 'Roboto, sans-serif', fontSize: "24px", color: "#00BFFF"}}>4 años celebrando RH WEEK</h3>
              <div style={{borderBottom: "3px solid #808080", marginBottom: "25px", marginTop: "25px"}}></div>
            </div>
            <div>
              <p style={{fontFamily: 'Roboto, sans-serif', fontSize: "17px", textAlign: "justify"}}>Networking con especialistas y ejecutivos de RH, Conoce las tendencias e innovaciones en la Gestión de la Compensación Total, Escucha en voz de los expertos y especialistas las mejores prácticas en Capital Humano y Compensaciones.</p>
            </div>
            <div className='botonSeccionTop' style={{marginTop: "30px"}}>
              <Link href="/servicios" passHref={true} legacyBehavior>
                <a className="default-btn">
                  VER PROGRAMA
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
                <Image width={960} height={680} src='/img/section/zac.jpg' alt='arioac' loading='lazy'/>
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