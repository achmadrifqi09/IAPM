import React from "react";
import { H3, Paragraph } from "../../../../Components/Text";
import LogoImage from "../../../../../../public/assets/images/dummy/3dLogo.svg";
import {
    EyeIcon,
    RocketLaunchIcon,
    BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const CompanyDesc = (props) => {
    const {} = props;
    return (
        <section className="w-full bg-iapm-light-gray shadow-[-1px_-149px_65px_-159px_rgba(0,0,0,0.03)_inset] border-b border-b-iapm-light-gray">
            <div className="bg-grid py-20 bg-no-repeat bg-left-top">
                <div className="grid max-md:grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto px-6 md:px-8 gap-8 max-md:gap-6 items-start">
                    <div className="space-y-8 min-h-screen">
                        <div className="bg-white space-y-6 p-6 rounded-3xl shadow-md">
                            <div className="flex gap-4">
                                <span className="p-2 bg-iapm-yellow block w-max rounded-full h-max">
                                    <BuildingOffice2Icon className="w-6 h-6" />
                                </span>
                                <H3>About IAPM Elinksolution</H3>
                            </div>
                            <Paragraph>
                                IAPM e-Link Solution Indonesia is the company's
                                business transformation professionals in the
                                field of Information Technology become a
                                solution company project management consultants,
                                certification services, business analysts, and
                                of course still is a reliable consulting company
                                in the field of information technology that
                                became the core business of the corporation a
                                decade ago. Business transformation carried out
                                By applying an international standard framework
                                to each service, Thus the experience of the
                                solution provided is ensured under Industry
                                standardization is global.
                            </Paragraph>
                        </div>

                        <div className="bg-white space-y-6 p-6 rounded-3xl shadow-md">
                            <div className="flex gap-4">
                                <span className="p-2 bg-iapm-yellow block w-max rounded-full h-max">
                                    <EyeIcon className="w-6 h-6" />
                                </span>
                                <H3>Vision</H3>
                            </div>
                            <Paragraph>
                                The vision of IAPM e-Link Solution Indonesia is
                                "Making IAPM e-Link Solution Indonesia a
                                reliable partner with global solutions in the
                                field of Project Management, Business Analysis,
                                and Information Technology Management that are
                                quality and reliable"
                            </Paragraph>
                        </div>
                        <div className="bg-white space-y-6 p-6 rounded-3xl shadow-md">
                            <div className="flex gap-4">
                                <span className="p-2 bg-iapm-yellow block w-max rounded-full h-max">
                                    <RocketLaunchIcon className="w-6 h-6" />
                                </span>
                                <H3>Mission</H3>
                            </div>
                            <Paragraph>
                                IAPM e-Link Solution Indonesia's mission is
                                "Establish harmonious cooperation with
                                investors, clients and partners, improving
                                skills, interpretation, humanist personnel,
                                honest, transparent, educate clients, provide
                                analysis of handling Project, Business and
                                Information Technology problems in a manner Fast
                                and precise, prioritizing the quality of service
                                solutions. Framework implementation
                                internationally certified: International
                                Association of Project Managers (IAPM) Europe,
                                International Institute of Business Analyst
                                (IIBA) and ISO/IEC standardization 27001”.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="max-md:hidden sticky top-36">
                        <div className="after:content-logo after:bg-white after:px-4 after:py-2 after:rounded-full after:shadow-md after:-bottom-8 after:absolute after:left-6">
                            <img
                                src={LogoImage}
                                alt=""
                                className="aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-br-[64px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CompanyDesc;
