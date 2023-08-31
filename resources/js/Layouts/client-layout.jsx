import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ClientLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins pt-24">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default ClientLayout;
