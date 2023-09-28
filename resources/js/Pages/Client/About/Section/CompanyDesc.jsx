import React from "react";
import { H3, Paragraph } from "../../../../Components/Text";
import DefaultImage from "../../../../../../public/assets/images/default-images/iapm-logo.jpg";
import {
    EyeIcon,
    RocketLaunchIcon,
    BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const CompanyDesc = (props) => {
    const { aboutTitle, visionTitle, missionTitle, image, company } = props;

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
                                <H3>{aboutTitle}</H3>
                            </div>
                            <Paragraph>{company?.description}</Paragraph>
                        </div>

                        <div className="bg-white space-y-6 p-6 rounded-3xl shadow-md">
                            <div className="flex gap-4">
                                <span className="p-2 bg-iapm-yellow block w-max rounded-full h-max">
                                    <EyeIcon className="w-6 h-6" />
                                </span>
                                <H3>{visionTitle}</H3>
                            </div>
                            <Paragraph>{company?.vision}</Paragraph>
                        </div>
                        <div className="bg-white space-y-6 p-6 rounded-3xl shadow-md">
                            <div className="flex gap-4">
                                <span className="p-2 bg-iapm-yellow block w-max rounded-full h-max">
                                    <RocketLaunchIcon className="w-6 h-6" />
                                </span>
                                <H3>{missionTitle}</H3>
                            </div>
                            <Paragraph>{company?.mission}</Paragraph>
                        </div>
                    </div>
                    <div className="max-md:hidden sticky top-20">
                        <img
                            src={image ? image : DefaultImage}
                            alt="Image of About IAPM Elinksolution"
                            className="aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-br-[64px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CompanyDesc;
