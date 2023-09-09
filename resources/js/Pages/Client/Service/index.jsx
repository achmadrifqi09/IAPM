import React from "react";
import { Head } from "@inertiajs/inertia-react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceHeader from "./Section/ServiceHeader";
import ServiceListing from "./Section/ServiceListing";

const Service = (props) => {
    const { datas } = props;

    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <ClientLayout>
                <ServiceHeader
                    title={datas["service"]?.title}
                    description={datas["service"]?.description}
                />
                <ServiceListing />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default Service;
