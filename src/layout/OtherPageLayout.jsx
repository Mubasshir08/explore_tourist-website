import React from 'react';

import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer'

const OthersPageLayout = ({children}) => {

    return (
        <>
           <Nav homeNavBgColor = 'bg-sky-500' position = 'sticky'/> 
            {children}
           <Footer />
        </>
    );
};

export default OthersPageLayout;