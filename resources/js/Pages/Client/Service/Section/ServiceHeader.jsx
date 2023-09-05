import React from "react";

import { H2, Paragraph } from "../../../../Components/Text";
import { CubeIcon } from "@heroicons/react/24/outline";

const ServiceHeader = (props) => {
    return (
        <section className="bg-no-repeat bg-left bg-grid ">
            <div className=" h-full py-16 bg-opacity-60">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 ">
                    <span className="bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6">
                        <CubeIcon className="w-12 h-12" />
                    </span>
                    <H2>Our Service</H2>
                    <div className="md:max-w-[70vw]">
                        <Paragraph>
                            Business transformation carried out By applying an
                            international standard framework to each service,
                            Thus the experience of the solution provided is
                            ensured in accordance with Global industry
                            standardization.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeader;
