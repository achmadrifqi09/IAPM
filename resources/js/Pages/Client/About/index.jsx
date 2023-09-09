import React from "react";
import { Head } from "@inertiajs/inertia-react";
import ClientLayout from "../../../Layouts/client-layout";
import CompanyDesc from "./Section/CompanyDesc";
import CTA from "../../../Components/CTA";
import HistoryDevelopment from "./section/HistoryDevelopment";
import GetterAsset from "../../../Helpers/getter-asset";

const About = (props) => {
    const { datas, assets } = props;

    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <ClientLayout>
                <CompanyDesc
                    aboutTitle={datas["about"]?.title}
                    image={GetterAsset(datas["about"]?.id_asset, assets)}
                    missionTitle={datas["mission"]?.title}
                    visionTitle={datas["vision"]?.title}
                />
                <HistoryDevelopment
                    title={datas["history-of-development"]?.title}
                    description={datas["history-of-development"]?.description}
                />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default About;
