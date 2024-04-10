import React from 'react';

const Section2 = () => {
  return (
    <section className='fondoSeccion2' style={{paddingBottom: "10px"}}>
      <div className='container'>
        <div className="item">
          <div className="sub-item">
            <h1 className="title">DESARROLLAMOS TU PROYECTO</h1>
          </div>
          <div className="sub-item">
            <p className='texto-section2'>Te acompañamos en el proceso de creación y fabricación de tu producto. Contáctanos y obtén una solución especializada para tu proyecto.</p>
          </div>
          <section className="sub-item">
            <div className="sub-sub-item">
              <div className="icon-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="197"
                  className='paddingcustom'
                  height="219"
                  src="/img/iconos/icono2.svg"
                  alt="solicita-cotizacion-para-tu-proyecto-maquila-y-suplementos"
                />
                <h2 className="sub-title">SOLICITA UNA COTIZACIÓN</h2>
                <p className="texto-section2">
                  Comunícate a nuestros teléfonos o por medio de nuestro formulario de contacto para que un asesor experto se comunique contigo.
                </p>
              </div>
              <div className="icon-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="197"
                  height="219"
                  src="/img/iconos/icono1.svg"
                  className="nopadding"
                  alt="desarrollamos-tu-proyecto-maquilas-y-suplementos"
                />
                <h2 className="sub-title">CUENTANOS SOBRE TU PROYECTO</h2>
                <p className="texto-section2">
                  Evaluamos el mejor proceso para el desarrollo de tu producto y ponemos
                  en marcha un plan detallado para seguir con las medidas adecuadas de
                  inocuidad y calidad.
                </p>
              </div>
              <div className="icon-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width="197"
                  height="219"
                  src="/img/iconos/icono3.svg"
                  alt="confianza-y-compromiso-maquilas-y-suplementos"
                />
                <h2 className="sub-title">TRABAJA CON CONFIANZA</h2>
                <p className="texto-section2">
                  Entregamos tu proyecto en tiempo para que puedas comercializarlo.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section2;
