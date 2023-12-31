import React from 'react';

import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'

const OthersPageLayout = ({children}) => {

    return (
        <>
           <Nav /> 
            {children}
           <Footer />
        </>
    );
};

export default OthersPageLayout;