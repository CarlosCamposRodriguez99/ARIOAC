import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Empresa = () => {
  const carouselRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const content = contentRef.current;

    // Duplicar el contenido para un desplazamiento continuo
    content.innerHTML += content.innerHTML;

    let step = 1; // Cantidad de píxeles a desplazar por intervalo
    let maxScrollLeft = content.scrollWidth / 2;

    function scrollCarousel() {
      if (carousel) {
        carousel.scrollLeft += step;
        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollLeft = 0; // Reiniciar el desplazamiento
        }
      }
    }

    const interval = setInterval(scrollCarousel, 20); // Ajusta la velocidad aquí

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/img/section/1.jpg",
    "/img/section/2.jpg",
    "/img/section/3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia este valor (en milisegundos) para ajustar el intervalo de cambio de imagen

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <React.Fragment>
      <section id="team2" className="team team-2 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-2 text-center mb-50">
                <p className="heading--subtitle"></p>
                <h2 className="heading--title">CONFERENCISTAS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="carousel-dots" ref={carouselRef}>
                <div className="carousel-content" ref={contentRef}>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/AlmaJessicaSouleAngeles .png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Alma Jessica Soulé Angeles</h5>
                      <h6>
                        Directora General de Talento & Legado, Coach de
                        Directivos, líderes y equipos.
                      </h6>
                      <h7>Talento & Legado</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/MarlenTrevino.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Marlen Treviño</h5>
                      <h6>
                        Psicóloga y Conferencista, especialista en desarrollo
                        personal y organizacional
                      </h6>
                      <h7>Marlen Treviño</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/JuanCarlosPaezNunez.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className="pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Juan Carlos Páez Núñez</h5>
                      <h6>
                        CEO en PhemSoft y Especialista en Medición del Talento
                      </h6>
                      <h7>PhemSoft</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/IvonneBorden.jpg"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className="pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Ivonne Borden</h5>
                      <h6>Pendiente Puesto de Trabajo</h6>
                      <h7>Pendiente empresa</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/LeslieCooper.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Leslie Cooper</h5>
                      <h6>
                        Partner en HK Human Capital expertos en Capital Humano,
                        Inclusión y Negocios
                      </h6>
                      <h7>HK Human Capital</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/SalvadorRomero.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Salvador Romero</h5>
                      <h6>
                        HR Manager, North America Region at Whirlpool
                        Corporation
                      </h6>
                      <h7>Whirlpool</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/MariaJoseSanchezYago .png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>María José Sánchez Yago </h5>
                      <h6>CEO de Creatia Human y co-fundadora de Lidero</h6>
                      <h7></h7>Creatia Human
                    </div>
                  </div>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/PabloInfanta .png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Pablo Infanta</h5>
                      <h6>
                        Director y Consultor Senior en Desarrollo Organizacional
                        y Gestión de Recursos Humanos
                      </h6>
                      <h7>Adapt Consultores Spa</h7>
                    </div>
                  </div>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/AndreaGrobocopatel.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Andrea Grobocopatel</h5>
                      <h6>
                        Economista y fundadora de Ampatel, Resiliencia SGR y
                        Fundación FLOR
                      </h6>
                      <h7>Fundación FLOR Argentina</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team2" className="team team-2 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="carousel-dots" ref={carouselRef}>
                <div className="carousel-content" ref={contentRef}>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/MarianaIturbeDesentis.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Mariana Iturbe Desentis </h5>
                      <h6>
                        Conferencista y desarrolladora de proyectos de Salud
                        Mental{" "}
                      </h6>
                      <h7>Inteliteam</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/AnwarBuereVillegas.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Anwar Buere Villegas</h5>
                      <h6>Socio Director de Humancore</h6>
                      <h7>Humancore Empresarial</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/GabrielLucianoPietrafesa.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className="pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Gabriel Luciano Pietrafesa</h5>
                      <h6>People Analytics Lead</h6>
                      <h7>Scopely</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/WendyPacheco.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className="pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Wendy Pacheco</h5>
                      <h6>
                        Socia Consultora en CD Consultores y conferencista
                        internacional especializada en temas de gestión humana
                      </h6>
                      <h7>CD Consultores</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/MariaLuisaGarza.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>María Luisa Garza</h5>
                      <h6>Dirección Administratival</h6>
                      <h7>Psicotest</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/Ricardo Carreon.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Ricardo Carréon</h5>
                      <h6>Especialista IA y Top Voice Linkedin</h6>
                      <h7>Consultor IA</h7>
                    </div>
                  </div>


                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/DianaMilenaLemusQuimbayo.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Diana Milena Lemus Quimbayo</h5>
                      <h6>Human Resources Manager at Capgemini</h6>
                      <h7>Capgemini</h7>
                    </div>
                  </div>

                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/Tergum.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Raúl Montero Jauregui y Gamaliel Santiago</h5>
                      <h6>
                        Socio Director Tergum Jalisco Socio Directo Tergum
                        Puebla
                      </h6>
                      <h7>Tergum</h7>
                    </div>
                  </div>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/GuillermoRivera.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Guillermo Rivera</h5>
                      <h6>Líder de Transformación Estratégica en Orienta</h6>
                      <h7>Orienta Pae</h7>
                    </div>
                  </div>
                  <div className="memberConfe">
                    <div className="memberConfe-img">
                      <img
                        src="/img/conferencistas/RoxanaCastilloDiazdeLeon.png"
                        alt="memberConfe"
                      />
                      <div className="memberConfe-overlay">
                        <div className="memberConfe-social">
                          <div className=" pos-vertical-center">
                            <p
                              style={{
                                color: "white",
                                fontFamily: "Palatino, serif",
                                fontSize: "15px",
                              }}
                            >
                              "Pendiente"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="memberConfe-info">
                      <h5>Roxana Castillo Díaz de León</h5>
                      <h6>Pendiente Puesto de Trabajo</h6>
                      <h7>Pentiende Empresa</h7>
                    </div>
                  </div>
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
              className="imageYoutube"
              decoding="async"
              src={images[imageIndex]}
              alt="suplementos-alimenticios-youtube"
              loading="lazy"
            />
            <div
              className="element-content"
              style={{
                textAlign: "centert",
                maxWidth: "100%",
                marginRight: "30px",
              }}
            >
              <h3
                className="titleYoutube"
                style={{
                  color: "#000",
                  marginBottom: "5px",
                  marginTop: "50px",
                }}
              ></h3>
              <img
                src="/img/redes-sociales/tik-02.svg"
                alt="youtube"
                width="300px"
                height="100px"
              />
              <p
                className="noneYoutube"
                style={{
                  textAlign: "left",
                  fontFamily: "Montserrat, sans-serif",
                  marginTop: "20px",
                  marginBottom: "40px",
                  fontSize: "16px",
                }}
              >
                <br />
              </p>
              <a
                href="https://www.tiktok.com/@arioac"
                target="_blank"
                className="element-button"
              >
                Visitar TikTok
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Empresa;
