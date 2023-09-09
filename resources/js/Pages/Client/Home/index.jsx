import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import ClientLayout from "../../../Layouts/client-layout";
import GetterAsset from "../../../Helpers/getter-asset";
import Hero from "./Section/Hero";
import ClientGalery from "./Section/ClientGalery";
import VideoSection from "./Section/Capability";
import ServiceOverview from "./Section/ServiceOverview";
import Testimonial from "./Section/Testimonial";
import CTA from "../../../Components/CTA";

const HomePage = (props) => {
    const { datas, assets, footerContents } = props;

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <ClientLayout footerContents={footerContents}>
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
                />
                <Testimonial title={datas["testimonial"]?.title} />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default HomePage;
