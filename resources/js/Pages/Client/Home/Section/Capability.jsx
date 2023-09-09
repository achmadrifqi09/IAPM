import React from "react";
import { H2, Paragraph } from "../../../../Components/Text";
import VideoSource from "../../../../../../public/assets/video.mp4";

const VideoSection = (props) => {
    const {title, description, video} = props;
    return (
        <section
            className="w-full my-36 bg-iapm-light-gray relative py-16 after:content-[''] after:bock after:w-48 after:h-56 after:bg-dot-ornament 
        after:bg-no-repeat after:absolute after:right-0 after:-bottom-24 after:md:-bottom-32 after:max-md:w-24 after:max-md:h-36 after:z-0"
        >
            <div className=" max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div>
                    <video className="rounded-xl" controls>
                        <source src={VideoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="space-y-6">
                    <H2>
                        {title}
                    </H2>
                    <Paragraph>
                        {description}
                    </Paragraph>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
