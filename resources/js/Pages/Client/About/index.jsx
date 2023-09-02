import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CompanyDesc from "./Section/CompanyDesc";
import CTA from "../../../Components/CTA";
import HistoryDevelopment from "./section/HistoryDevelopment";

const About = (props) => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <ClientLayout>
                <CompanyDesc />

                <HistoryDevelopment />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default About;
