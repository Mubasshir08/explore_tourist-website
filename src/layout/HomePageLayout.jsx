import React from 'react';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

const HomePageLayout = ({children}) => {
    return (
       <>
        <Nav homeNavBgColor = 'bg-transparent' position = 'absolute'/>
            {children}
        <Footer />
       </>
    );
};

export default HomePageLayout;