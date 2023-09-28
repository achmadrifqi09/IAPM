import React, { useEffect, useState } from "react";
import { Head, router } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import GetterAsset from "../../../Helpers/getter-asset";
import Hero from "./Section/Hero";
import ClientGalery from "./Section/ClientGalery";
import VideoSection from "./Section/Capability";
import ServiceOverview from "./Section/ServiceOverview";
import Testimonial from "./Section/Testimonial";
import CTA from "../../../Components/CTA";
import defaultImage from "../../../../../public/assets/images/default-images/iapm-logo.jpg";
import Meta from "../../../Components/Meta";

const HomePage = (props) => {
    const { datas, assets, attributes, services, testimonials, clients } =
        props;
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <Meta metas={datas?.meta} type="website" />
            <ClientLayout attributes={attributes}>
                <Hero
                    title={datas["home-hero"]?.title}
                    description={datas["home-hero"]?.description}
                    buttonLabel={datas["home-hero"]?.button_label}
                    buttonUrl={datas["home-hero"]?.button_url}
                    image={GetterAsset(datas["home-hero"]?.id_asset, assets)}
                />
                <ClientGalery
                    title={datas["successful-project"]?.title}
                    clients={clients}
                />
                <VideoSection
                    title={datas["capability"]?.title}
                    description={datas["capability"]?.description}
                />
                <ServiceOverview
                    title={datas["service-overview"]?.title}
                    description={datas["service-overview"]?.description}
                    buttonLabel={datas["service-overview"]?.button_label}
                    buttonUrl={datas["service-overview"]?.button_url}
                    services={services}
                />
                <Testimonial
                    title={datas["testimonial"]?.title}
                    testimonials={testimonials}
                />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default HomePage;
