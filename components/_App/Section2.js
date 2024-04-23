import React from 'react';

const Section2 = () => {
  return (
    <React.Fragment>
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
            <h3 className="title">HR WEEK</h3>
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
  );
};

export default Section2;