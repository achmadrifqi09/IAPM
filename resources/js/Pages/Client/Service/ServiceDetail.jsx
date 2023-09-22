import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceDisplay from "./Section/ServiceDisplay";
import ServiceSuggestion from "./Section/ServiceSuggestion";

const ServiceDetail = (props) => {
    const { attributes, service, services } = props;
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <ClientLayout attributes={attributes}>
                <ServiceDisplay service={service} />
                <ServiceSuggestion services={services} />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default ServiceDetail;
