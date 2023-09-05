import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceHeader from "./Section/ServiceHeader";
import ServiceListing from "./Section/ServiceListing";

const Service = (props) => {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <ClientLayout>
                <ServiceHeader />
                <ServiceListing />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default Service;
