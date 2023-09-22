import React from "react";
import { H2, Paragraph, Subtitle } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import DefaultImage from "../../../../../../public/assets/images/default-images/3dLogo.svg";
import SwiperContainer from "../../../../Components/Swiper";

import { SwiperSlide } from "swiper/react";

const ServiceOverview = (props) => {
    const { title, description, buttonLabel, buttonUrl, services } = props;
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    return (
        <section className="w-full my-36">
            <div className=" max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start">
                    <div>
                        <H2>{title}</H2>
                        <Paragraph>{description}</Paragraph>
                    </div>
                    <IButton
                        isLink={true}
                        url={buttonUrl}
                        variant="normal-link"
                    >
                        {buttonLabel}
                        <ArrowRightIcon className="w-6 h-6 text-iapm-black" />
                    </IButton>
                </div>
                <div className="my-6">
                    <SwiperContainer>
                        {services.map((service, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="min-w-[320px] min-h-[320px] bg-white mb-16">
                                        <div className=" overflow-hidden rounded-xl">
                                            <img
                                                src={
                                                    `${baseUrlAsset}/${service?.image}` ||
                                                    DefaultImage
                                                }
                                                alt={`Image from ${service?.service_name} service`}
                                                className="w-full h-auto rounded-xl hover:scale-110 transition duration-200 aspect-[4/3] object-cover object-center"
                                            />
                                        </div>
                                        <div className="my-4 space-y-6 ">
                                            <Subtitle>
                                                {service?.service_name}
                                            </Subtitle>
                                            <IButton
                                                isLink={true}
                                                url={`/services/${service?.id}`}
                                                variant="link-border"
                                            >
                                                Learn More
                                            </IButton>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </SwiperContainer>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
