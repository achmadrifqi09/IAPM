import React, { useRef } from "react";
import { H2, Paragraph, Subtitle } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "../../../../../../public/assets/images/dummy/product.png";
import SwiperContainer from "../../../../Components/Swiper";

import { SwiperSlide } from "swiper/react";

const ProductOverview = (props) => {
    return (
        <section className="w-full my-36">
            <div className=" max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start">
                    <div>
                        <H2>Services We Offer</H2>
                        <Paragraph>
                            We provide a variety of services that are integrated
                            with the global framework
                        </Paragraph>
                    </div>
                    <IButton
                        isLink={true}
                        url="/services"
                        variant="normal-link"
                    >
                        Explore All{" "}
                        <ArrowRightIcon className="w-6 h-6 text-iapm-black" />
                    </IButton>
                </div>
                <div className="my-6">
                    <SwiperContainer>
                        {[...new Array(4)].map((_, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="min-w-[320px] min-h-[320px] bg-white mb-16">
                                        <div className=" overflow-hidden rounded-xl">
                                            <img
                                                src={Image}
                                                alt=""
                                                className="w-full h-auto rounded-xl hover:scale-110 transition duration-200"
                                            />
                                        </div>
                                        <div className="my-4 space-y-6 ">
                                            <Subtitle>
                                                Business Analyst & Portfolio
                                                Management
                                            </Subtitle>
                                            <IButton
                                                isLink={true}
                                                url="/services"
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

export default ProductOverview;
