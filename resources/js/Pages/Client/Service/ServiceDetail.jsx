import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceDisplay from "./Section/ServiceDisplay";
import ServiceSuggestion from "./Section/ServiceSuggestion";
import Meta from "../../../Components/Meta";

const ServiceDetail = (props) => {
    const { attributes, service, services, meta } = props;

    return (
        <>
            <Meta type="website" metas={meta} image={service?.image} />
            <ClientLayout attributes={attributes}>
                <ServiceDisplay service={service} />
                <ServiceSuggestion services={services} />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default ServiceDetail;
