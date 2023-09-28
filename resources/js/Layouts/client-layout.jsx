import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

const ClientLayout = (props) => {
    const { children, attributes } = props;
    useEffect(() => {
        ReactGA.initialize(`${import.meta.env.VITE_GA_MEASUREMENT_ID}`);
        TagManager.initialize({
            gtmId: import.meta.env.VITE_GTM_ID,
        });
    }, []);
    return (
        <>
            <Navbar />
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins">
                {children}
            </main>
            <Footer attributes={attributes} />
        </>
    );
};

export default ClientLayout;
