import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../../../../Components/Carousel";
import { H2, Paragraph, H5 } from "../../../../Components/Text";

const Testimonial = (props) => {
    const { testimonials, title } = props;
    return (
        <section className="w-full my-36 bg-grid bg-no-repeat">
            <div className="max-w-screen-xl mx-auto px-6 md:px-8 text-center space-y-12 bg-gradient-linear-white">
                <H2>{title}</H2>
                <Carousel>
                    {testimonials.map((testimonial, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="text-center relative max-w-screen-sm mx-auto space-y-6 mb-16 ">
                                    <div>
                                        <blockquote className=" text-iapm-black">
                                            <div className="flex justify-start">
                                                <svg
                                                    className="w-8 h-8 text-iapm-dark-gray mb-4"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 18 14"
                                                >
                                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                                </svg>
                                            </div>
                                            <Paragraph>
                                                {testimonial?.quote}
                                            </Paragraph>
                                            <div className="flex justify-end">
                                                <svg
                                                    className="w-8 h-8 text-iapm-dark-gray mb-4"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 18 14"
                                                >
                                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                                </svg>
                                            </div>
                                        </blockquote>
                                    </div>
                                    <div>
                                        <H5> {testimonial?.name}</H5>
                                        <Paragraph>
                                            {testimonial?.position}
                                        </Paragraph>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonial;
