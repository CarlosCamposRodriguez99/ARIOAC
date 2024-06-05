import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import WhatsAppIcon from '../components/_App/WhatsAppIcon';
import PageBanner from '../components/Common/PageBanner';
import Empresa from '../components/_App/Empresa';
 
const empresa = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                homePageUrl="/"
                imgClass="bg-1"
            />

            <Empresa />

            <WhatsAppIcon />
            <Footer />
        </React.Fragment>
    );
}

export default empresa;