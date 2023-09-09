import React from "react";

import { H2, Paragraph } from "../../../../Components/Text";
import { CubeIcon } from "@heroicons/react/24/outline";

const ServiceHeader = (props) => {
    const { title, description } = props;
    return (
        <section className="bg-no-repeat bg-left bg-grid ">
            <div className=" h-full py-16 bg-opacity-60">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 ">
                    <span className="bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6">
                        <CubeIcon className="w-12 h-12" />
                    </span>
                    <H2>{title}</H2>
                    <div className="md:max-w-[70vw]">
                        <Paragraph>{description}</Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeader;
