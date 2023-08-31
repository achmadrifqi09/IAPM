import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../Layouts/client-layout";
import H1 from "../../Components/Text/H1";
import Hero from "../../Components/Hero/Hero";
import largeImage from "../../../../public/assets/images/dummy/first-image.svg";
import smallImage from "../../../../public/assets/images/dummy/second-image.svg";

import ClientGalery from "../../Components/ClientGalery";
import VideoSection from "../../Components/VideoSection";
import ProductOverview from "../../Components/ProductOverview";
import Testimonial from "../../Components/Testimonial";
import CTA from "../../Components/CTA";

const HomePage = () => {
    const dummy = {
        heroTitle:
            "Creating ideas, innovations in Business and Technology within Global Frameworks!",
        heroDescription:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    };
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <ClientLayout>
                <Hero
                    title={dummy.heroTitle}
                    description={dummy.heroDescription}
                    largeImage={largeImage}
                    smallImage={smallImage}
                />
                <ClientGalery />
                <VideoSection />
                <ProductOverview />
                <Testimonial />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default HomePage;
