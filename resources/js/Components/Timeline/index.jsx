import React from "react";
import {CheckCircleIcon} from '@heroicons/react/24/outline'
import { H5, Paragraph } from "../Text";

const Timeline = (props) => {
    return (
        <div>
            <ol className="border-t border-t-iapm-dark-gray flex gap-2">
                <li className="relative">
                    <span className="w-8 h-8 bg-iapm-baltic-sea block absolute -top-4 rounded-full p-1 box-border">
                        <CheckCircleIcon className="w-6 h-6 text-iapm-yellow"/>
                    </span>
                    <p className="mt-8 bg-white">test</p>
                </li>
                <li>test</li>
                <li>test</li>
            </ol>
            {/* <ol className="relative border-l border-iapm-baltic-sea">
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-iapm-baltic-sea bg-iapm-yellow">
                        <CheckCircleIcon className="w-6 h-6 text-iapm-baltic-sea" />
                    </span>
                    <div className="p-6 border bg-white border-iapm-light-gray shadow rounded-xl space-y-4">
                        <H5>2019</H5>
                        <Paragraph>
                            Online Payment Integrator Cloud Microsoft Azure,
                            Google, Amazon AWS Information Technology System
                            Design Architect
                        </Paragraph>
                    </div>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-4 ring-iapm-baltic-sea bg-iapm-yellow">
                        <CheckCircleIcon className="w-6 h-6 text-iapm-baltic-sea" />
                    </span>
                    <div className="p-6 border bg-white border-iapm-light-gray shadow rounded-xl space-y-4">
                        <H5>2020</H5>
                        <Paragraph>
                            Online Payment Integrator Cloud Microsoft Azure,
                            Google, Amazon AWS Information Technology System
                            Design Architect
                        </Paragraph>
                    </div>
                </li>
            </ol> */}
        </div>
    );
};

export default Timeline;
