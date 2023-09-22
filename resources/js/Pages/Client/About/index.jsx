import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import CompanyDesc from "./Section/CompanyDesc";
import CTA from "../../../Components/CTA";
import HistoryDevelopment from "./section/HistoryDevelopment";
import GetterAsset from "../../../Helpers/getter-asset";

const About = (props) => {
    const { datas, assets, attributes, company, histories } = props;

    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <ClientLayout attributes={attributes}>
                <CompanyDesc
                    aboutTitle={datas["about"]?.title}
                    image={GetterAsset(datas["about"]?.id_asset, assets)}
                    missionTitle={datas["mission"]?.title}
                    visionTitle={datas["vision"]?.title}
                    company={company}
                />
                <HistoryDevelopment
                    title={datas["history-of-development"]?.title}
                    description={datas["history-of-development"]?.description}
                    histories={histories}
                />
                <CTA />
            </ClientLayout>
        </>
    );
};

export default About;
