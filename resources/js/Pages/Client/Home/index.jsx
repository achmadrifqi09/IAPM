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
import defaultImage from "../../../../../public/assets/images/default-images/3dLogo.svg";

const HomePage = (props) => {
    const { datas, assets, attributes, services, testimonials } = props;
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <Head>
                <title>{datas?.meta?.meta_title}</title>
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content={datas?.meta?.meta_description}
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={datas?.meta?.meta_title} />
                <meta
                    property="og:description"
                    content={datas?.meta?.meta_description}
                />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:site_name" content="PT IAPM Elinksolution" />

                <meta property="og:image" content={defaultImage} />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="853" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@iapmelinksolution" />
            </Head>
            <ClientLayout attributes={attributes}>
                <Hero
                    title={datas["home-hero"]?.title}
                    description={datas["home-hero"]?.description}
                    buttonLabel={datas["home-hero"]?.button_label}
                    buttonUrl={datas["home-hero"]?.button_url}
                    image={GetterAsset(datas["home-hero"]?.id_asset, assets)}
                />
                <ClientGalery title={datas["successful-project"]?.title} />
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
