import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import PageBanner from '../components/Common/PageBanner';
import ServiciosPage from '../components/_App/ServiciosPage';
 
const servicios = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                homePageUrl="/"
                imgClass="bg-2"
                pageTitle="EVENTOS"
                parrafo="Conoce los servicios especializados con los que contamos para el desarrollo de tus productos. Nos dedicamos a la fabricación, envasado y maquila de productos. Contamos con las instalaciones para cumplir con los requerimientos de tu producto."
            />

            <ServiciosPage />

            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default servicios;