import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="feature-area pb-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="col-lg-12">
                    <div className="feature-wrap d-flex justify-content-between align-items-center">
                        <div className="single-feature">
                            <p style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: "16px",
                                fontWeight: 600,
                                textAlign: "justify"
                            }}>En Arioac, nos dedicamos a trascender los límites de lo convencional en la organización de eventos, elevando cada congreso y conferencia magistral a nuevas alturas de excelencia. Desde la concepción hasta la ejecución, nuestro equipo comprometido trabaja incansablemente para crear experiencias que cautiven, inspiren y dejen una huella perdurable en todos los participantes. Confía en nosotros para convertir tus ideas en realidades impactantes y transformar cada evento en una historia de éxito inolvidable.</p>
                        </div>
                        <div className="d-flex mx-4">
                            <Link href="/empresa" passHref={true} legacyBehavior>
                                <a className="default-btn2">
                                    Conócenos
                                </a>
                            </Link>
                            <span className="mx-3"></span> {/* Espacio entre los botones */}
                            <Link href="/servicios" passHref={true} legacyBehavior>
                                <a className="default-btn3">
                                    Ver EVENTOS
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
