import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CTA from "../../../Components/CTA";
import ServiceHeader from "./Section/ServiceHeader";
import ServiceListing from "./Section/ServiceListing";
import Meta from "../../../Components/Meta";
const Service = (props) => {
    const { datas, attributes, services } = props;

    return (
        <>
            <Meta metas={datas?.meta} type="website" />
            <ClientLayout attributes={attributes}>
                <ServiceHeader
                    title={datas["service"]?.title}
                    description={datas["service"]?.description}
                />
                <ServiceListing services={services} />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default Service;
