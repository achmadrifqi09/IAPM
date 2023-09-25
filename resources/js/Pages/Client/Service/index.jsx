import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceHeader from "./Section/ServiceHeader";
import ServiceListing from "./Section/ServiceListing";

const Service = (props) => {
    const { datas, attributes, services } = props;
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <ClientLayout attributes={attributes}>
                <ServiceHeader
                    title={datas["service"]?.title}
                    description={datas["service"]?.description}
                   
                />
                <ServiceListing services={services}/>
                <CTA />
            </ClientLayout>
        </>
    );
};

export default Service;
