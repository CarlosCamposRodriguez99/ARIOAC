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
                                                }}>SEMANA DE CELEBRACIÓN DEL PROFESIONAL DEL</h2>
                                                <p style={{
                                                    border: "5px solid #00BFFF",
                                                    width: "60%",
                                                    textAlign: "center",
                                                    fontSize: "35px",
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    letterSpacing: "1px",
                                                    lineHeight: "60px"
                                                }}>CAPITAL HUMANO</p>
                                                
                                                <div className="slider-btn">
                                                    <Link href="https://share.hsforms.com/1HupIgxJyRuK3lu6qDPtB7gq5t92" target="_blank" alt="formulario" legacyBehavior>
                                                        <Link className="default-btn">
                                                            ¡REGÍSTRATE!
                                                        </Link>
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
        </React.Fragment>
    )
}

export default HeroSlider;