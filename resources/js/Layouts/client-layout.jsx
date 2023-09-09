import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ClientLayout = (props) => {
    const { children, footerContents } = props;

    return (
        <>
            <Navbar />
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins">
                {children}
            </main>
            <Footer footerContents={footerContents} />
        </>
    );
};

export default ClientLayout;
