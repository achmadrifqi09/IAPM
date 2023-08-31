import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SwiperContainer = (props) => {
    const { children } = props;
    return (
        <Swiper
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            spaceBetween={40}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 3,
                },
                1536: {
                    slidesPerView: 3,
                },
            }}
        >
            <div className="py-32">{children}</div>
        </Swiper>
    );
};

export default SwiperContainer;
