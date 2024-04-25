import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    touchDrag: false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevrons-left'></i>",
        "<i class='bx bx-chevrons-right'></i>",
    ],
};

const HeroSlider = () => {

    // Slider
	const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
	}, [])

	// Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="hero-slider-area">

                {display ? <OwlCarousel 
                    className="hero-slider-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="slider-item slider-item-bg-1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text one">
                                                <h2 style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: 400,
                                                    color: "#fff",
                                                    marginBottom: "20px"
                                                }}>ASISTE A NUESTRO PRÓXIMO EVENTO</h2>
                                                <p style={{
                                                    border: "5px solid #1C9CD9",
                                                    width: "65%",
                                                    textAlign: "center",
                                                    fontSize: "35px",
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    letterSpacing: "1px",
                                                    lineHeight: "60px"
                                                }}>HR WEEK</p>
            
                                                <div className="slider-btn">
                                                    <Link className="default-btn" href="/empresa" legacyBehavior>
                                                        <a className="default-btn">
                                                            VER EVENTO
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text two">
                                                <h2 style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: 400,
                                                    color: "#fff",
                                                    marginBottom: "20px"
                                                }}>¡ADEMÁS! PARTICIPA PARA UNA</h2>
                                                <p style={{
                                                    border: "5px solid #00BFFF",
                                                    width: "60%",
                                                    textAlign: "center",
                                                    fontSize: "35px",
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    letterSpacing: "1px",
                                                    lineHeight: "60px"
                                                }}>ESTADÍA DOBLE EN BARRA DE NAVIDAD</p>
                                                
                                                <div className="slider-btn">
                                                    <Link href="/contact" legacyBehavior>
                                                        <a className="default-btn">
                                                            ¡PARTICIPA!
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item slider-item-bg-3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-9">
                                            <div className="slider-text three">
                                                <h2 style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: 400,
                                                    color: "#fff",
                                                    marginBottom: "20px"
                                                }}>CONFERENCIAS MAGISTRALES</h2>
                                                <p style={{
                                                    border: "5px solid #00BFFF",
                                                    width: "60%",
                                                    textAlign: "center",
                                                    fontSize: "35px",
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    letterSpacing: "1px",
                                                    lineHeight: "60px",
                                                }}>EVENTO HR WEEK</p>
            
                                                <div className="slider-btn">
                                                    <Link href="/servicios" legacyBehavior>
                                                        <a className="default-btn">
                                                            VER PROGRAMA
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
                
            </div>

        {/* If you want to change the video need to update videoID */}
           {/*<ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            /> */}
        </React.Fragment>
    )
}

export default HeroSlider;