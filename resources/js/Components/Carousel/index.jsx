import React from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = (props) => {
    const { children } = props;

    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            className="swiper"
        >
            {children}
        </Swiper>
    );
};

export default Carousel;
