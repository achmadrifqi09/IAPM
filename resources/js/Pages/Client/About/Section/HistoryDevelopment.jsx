import React, { useEffect, useState } from "react";
import { Paragraph, H3 } from "../../../../Components/Text";
import VerticalTabBar from "../../../../Components/TabBar/VerticalTabBar";
import DefaultImage from "../../../../../../public/assets/images/default-images/3dLogo.svg";

const HistoryDevelopment = (props) => {
    const { title, description } = props;

    const [displayedData, setDisplayedData] = useState({});
    const dummyData = [
        {
            year: 2014,
            description:
                "Online Payment Integrator Cloud Microsoft Azure, Google, Amazon AWS Information Technology System Design Architect",
        },
        {
            year: 2017,
            description:
                "Accredited Project Manager and Project Requirement Analyst Certified Informations System Security",
        },
        {
            year: 2020,
            description:
                "Certified International Associations of Project Managers, Scrum Master Europe Business Value Oriented Project Manager Enterprise Resource Planning ERP UK ISO/ IEC 27001 2019 Auditor Century Link GDC: Data Center Facility Planning and Management Schneider",
        },
        {
            year: 2022,
            description:
                "Financial Analyst and Investing Corporate Cyber Security Capability of Business Analyst - International Institute of Business Analyst (IIBA)",
        },
    ];

    const onClickMenu = (index) => {
        setDisplayedData(dummyData[index]);
    };

    useEffect(() => {
        setDisplayedData(dummyData[0]);
    }, []);

    return (
        <section className="w-full px-6 md:px-8 my-36 bg-grid bg-no-repeat">
            <div className="max-w-screen-xl mx-auto bg-gradient-linear-white space-y-16 ">
                <div className="flex items-center gap-6">
                    <div>
                        <H3>{title}</H3>
                        <Paragraph>{description}</Paragraph>
                    </div>
                </div>
                <div className="relative items-center max-lg:grid-cols-1">
                    <div>
                        <VerticalTabBar
                            datas={dummyData}
                            onClickMenu={onClickMenu}
                        >
                            <div className="grid gap-6 grid-cols-2 items-center max-md:grid-cols-1">
                                <div className="border border-iapm-red rounded-[32px]  mt-8 ml-8">
                                    <img
                                        src={DefaultImage}
                                        alt=""
                                        className="aspect-[4/3] object-cover w-full mx-auto relative -left-8 -top-8 rounded-t-[32px] rounded-br-[32px] rounded-bl-lg"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <H3>
                                        What have we completed in{" "}
                                        {displayedData.year}?
                                    </H3>
                                    <Paragraph>
                                        {displayedData.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </VerticalTabBar>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryDevelopment;
