import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname);

    const handleMouseEnter = (link) => {
        setActiveLink(link);
    };

    const handleMouseLeave = () => {
        setActiveLink(router.pathname);
    };

    return (
        <React.Fragment>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Primer código */}
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="footer-widget">
                                <div className="container">
                                    <div className="row align-items-center">
                                        {/* Logotipo y Enlaces */}
                                        <div className="col-xs-12 col-sm-12 col-md-14">
                                            <div className="footer--widget-title d-flex justify-content-between align-items-end">
                                                {/* Logotipo */}
                                                <div>
                                                    <Link href="/" passHref={true} legacyBehavior>
                                                        <a className="footer-brand">
                                                            <img src='/img/logoarioac.png' alt="maquilas y suplementos" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                {/* Enlaces */}
                                                <div className="d-flex">
                                                    <Link href="/" passHref={true} legacyBehavior>
                                                        <h3 className='nomargin' style={{ color: activeLink === '/' ? "#1C9CD9" : "#fff", margin: "0", fontSize: "18px", fontWeight: "600" }}>
                                                            <a
                                                                style={{ cursor: "pointer" }}
                                                                onMouseEnter={() => handleMouseEnter('/')}
                                                                onMouseLeave={handleMouseLeave}
                                                            >
                                                                INICIO
                                                            </a>
                                                        </h3>
                                                    </Link>
                                                    
                                                    <div className="d-flex">
                                                        <Link href="/empresa" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/empresa' ? "#1C9CD9" : "#fff", margin: "0 20px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/empresa')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    EMPRESA
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="d-flex">
                                                        <Link href="/servicios" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/servicios' ? "#1C9CD9" : "#fff", marginRight: "40px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/servicios')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    EVENTOS
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>

                                                    <div className="d-flex">
                                                        <Link href="/contact" passHref={true} legacyBehavior>
                                                            <h3 className='nomargin' style={{ color: activeLink === '/contact' ? "#1C9CD9" : "#fff", margin: "0 -20px", fontSize: "18px", fontWeight: "600" }}>
                                                                <a
                                                                    style={{ cursor: "pointer" }}
                                                                    onMouseEnter={() => handleMouseEnter('/contact')}
                                                                    onMouseLeave={handleMouseLeave}
                                                                >
                                                                    CONTACTO
                                                                </a>
                                                            </h3>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo código */}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xs-12 col-md-12" style={{ backgroundColor: "#333333", margin: "0 auto" }}>
                            <div className="row" style={{ padding: "0 auto", margin: "0 auto", alignItems: "center" }}>
                                <div className="col-xs-12 col-md-6 redes" style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                                    <span style={{color: "#fff", letterSpacing: "1px", fontSize: "16px", fontFamily: "Montserrat, sans-serif"}}>&copy; {currentYear} ARIOAC - Asociación de Recursos Humanos </span>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <a href="https://www.facebook.com/maquilasysuplementos" target='_blank' style={{ margin: '0 -13px' }}>
                                            <Image src="/img/redes-sociales/face-02.svg" alt="Facebook" width={35} height={35} />
                                        </a>
                                        <a href="https://www.instagram.com/maquilasysuplementos.mx/" target='_blank' style={{ margin: '0 25px' }}>
                                            <Image src="/img/redes-sociales/insta-02.svg" alt="Instagram" width={35} height={35} />
                                        </a>
                                        <a href="https://www.youtube.com/@maquilasysuplementos" target='_blank' style={{ margin: '0 -13px' }}>
                                            <Image src="/img/redes-sociales/you-02.svg" alt="YouTube" width={35} height={35} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
