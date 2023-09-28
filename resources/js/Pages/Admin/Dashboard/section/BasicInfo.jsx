import React from "react";
import { H2, Paragraph } from "../../../../Components/Text";
import {
    CubeIcon,
    NewspaperIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline";

const BasicInfo = (props) => {
    const { serviceCount, blogCount, emailCount } = props;
    return (
        <div className="md:col-span-2 flex flex-wrap gap-6">
            <div className="bg-white rounded-3xl shadow p-6 flex gap-6 items-center">
                <span className="bg-iapm-yellow p-4 rounded-xl">
                    <CubeIcon className="w-8 h-8" />
                </span>
                <div>
                    <Paragraph>Total service </Paragraph>
                    <H2>{serviceCount || 0}</H2>
                </div>
            </div>
            <div className="bg-white rounded-3xl shadow p-6 flex gap-6 items-center">
                <span className="bg-iapm-yellow p-4 rounded-xl">
                    <NewspaperIcon className="w-8 h-8" />
                </span>
                <div>
                    <Paragraph>Total blog posts published</Paragraph>
                    <H2>{blogCount || 0}</H2>
                </div>
            </div>
            <div className="bg-white rounded-3xl shadow p-6 flex gap-6 items-center">
                <span className="bg-iapm-yellow p-4 rounded-xl">
                    <EnvelopeIcon className="w-8 h-8" />
                </span>
                <div>
                    <Paragraph>Total incoming email</Paragraph>
                    <H2>{emailCount || 0}</H2>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
