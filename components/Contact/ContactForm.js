import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const ContactForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Realizar cualquier validación necesaria aquí

        // Mostrar la alerta de éxito
        MySwal.fire({
            title: '¡Enviado!',
            text: 'Su mensaje ha sido enviado, nos comunicaremos a la brevedad.',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
        });

        // Aquí puedes agregar el código para enviar el formulario si es necesario
        try {
            const formData = new FormData(event.target);
            const response = await fetch("https://formsubmit.co/info@maquilasysuplementos.mx", {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                // Aquí puedes manejar la respuesta del servidor si es necesario
                console.log('Formulario enviado con éxito');
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario', error);
        }
    };
        
    return (
	<React.Fragment>
    <div className="contact-area ptb-100">
    <div className="container">
        <div className="row align-items-stretch">
            <div className="col-lg-6" style={{ marginRight: '20px'}}>
                <div className="contact-wrap" style={{ border: "1px solid #EBEDEF", borderRadius: "10px" }}>
                    <div className="contact-form" style={{ marginTop: "5px", marginLeft: "5px" }}>
                        <div className="section-title">
                            <h2 style={{ fontFamily: "Montserrat, sans-serif", textAlign: "left", textTransform: "uppercase", fontSize: "24px" }}>Enviar mensaje</h2>
                            <div style={{ borderBottom: '2px solid #0880B6', marginBottom: "10px", width: "40%" }}></div>
                            <p style={{ textAlign: "justify", fontFamily: "Montserrat, sans-serif", color: "#000", fontWeight: 400 }}>Si está interesado en nuestros eventos, promociones, conferencias y desea conocer más detalles, deje un mensaje aquí, le responderemos lo antes posible.</p>
                        </div>
                        <form action="https://formsubmit.co/05498644fc0a192b12eee8fe081f1a95" method="POST" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group" style={{ position: "relative", lineHeight: 1 }}>
                                        <i className="flaticon-support" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Nombre"
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group" style={{ position: "relative", lineHeight: 1 }}>
                                        <i className="bx bx-envelope" style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px" }}
                                        />
                                    </div>
                                </div>
                                {/*aqui puedes editar diferentes iconos */}
                                <div className="col-lg-12">
                                    <div className="form-group" style={{ position: "relative", lineHeight: 1 }}>
                                        <i style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}>☎︎</i>
                                        <input
                                            type="text" // Cambié el tipo de entrada a "text"
                                            name="phone"
                                            placeholder="Número de celular o teléfono"
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px", paddingLeft: '25px' }} // Añadí paddingLeft para dar espacio al icono
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group" style={{ position: "relative", lineHeight: 1 }}>
                                        <i style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}>𖠿</i>
                                        <input
                                            type="text" // Cambié el tipo de entrada a "text"
                                            name="empresa"
                                            placeholder="Nombre de la empresa"
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px", paddingLeft: '25px' }} // Añadí paddingLeft para dar espacio al icono
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group" style={{ position: "relative", lineHeight: 1 }}>
                                        <i style={{ position: 'absolute', left: '5px', top: '50%', transform: 'translateY(-50%)' }}>✎</i>
                                        <input
                                            type="text" // Cambié el tipo de entrada a "text"
                                            name="puesto"
                                            placeholder="Puesto en la empresa"
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px", paddingLeft: '25px' }} // Añadí paddingLeft para dar espacio al icono
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="6"
                                            placeholder="Escríbe tu mensaje..."
                                            className="form-control"
                                            required
                                            style={{ borderRadius: "15px" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="default-btn page-btn texto-boton" style={{ borderRadius: "25px", padding: "15px 30px" }}>
                                        Enviar
                                    </button>
                                </div>

                                <input type="hidden" name="_next" value=""/>
                                <input type="hidden" name="_captcha" value="false"/>
                                <input type="hidden" name="_subject" value="¡Nuevo Mensaje! | Arioac"/>
                                <input type="hidden" name="_autoresponse" value="Tienes un nuevo mensaje. A continuación, encontrarás los datos del usuario:"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

			<div className="col-lg-5 d-flex justify-content-center separacionContacto">   
              <img className='borderImageContact' src="/img/contacto2.jpg" alt="arioac" loading='lazy' style={{ borderRadius: "20px" }} />
            </div>

        </div>
    </div>
</div>

		  {/* VIDEO SECTION */}

		  <div className="video-container">
		  {/* Video de fondo */}
		    <video autoPlay loop muted playsInline className="background-video">
			  <source src="/uploads/video.mp4" type="video/mp4" />
              <source src="/uploads/video.webm" type="video/webm" />
              <source src="/uploads/video.ogg" type="video/ogg" />
			  Tu navegador no soporta el elemento de video.
			</video>
			{/* Fondo oscuro semitransparente */}
			<div className="video-overlay"></div>
			{/* Contenido */}
			<div className="content">
			  <div className="title-container">
				<h3 className="title">Asociación de Recursos Humanos</h3>
			  </div>
			  <div className="subheading">
				<h1 className="subheading-text">Contáctanos</h1>
			  </div>
			  <div className="description">
				<p className="description-text">¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus metas!</p>
			  </div>
			</div>
		  </div>

		</React.Fragment>

    )
}

export default ContactForm;