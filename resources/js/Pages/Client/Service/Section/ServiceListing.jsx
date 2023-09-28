import React from "react";
import DefaultImage from "../../../../../../public/assets/images/default-images/iapm-logo.jpg";
import { H3, Paragraph } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
const ServiceListing = (props) => {
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    const { services } = props;
    const gridChildStyle = {
        orderFirst: "md:pr-16 order-first",
        orderLast: "md:pr-16 order-last max-md:order-first",
    };
    return (
        <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-16 space-y-12">
            {services.map((service, i) => {
                return (
                    <div
                        className="grid grid-cols-2 gap-6 items-center max-md:grid-cols-1"
                        key={i}
                    >
                        <div
                            className={
                                i % 2 === 0
                                    ? gridChildStyle.orderFirst
                                    : gridChildStyle.orderLast
                            }
                        >
                            <div className=" overflow-hidden rounded-3xl">
                                <img
                                    src={
                                        service?.image
                                            ? `${baseUrlAsset}/${service?.image}`
                                            : DefaultImage
                                    }
                                    alt="image product 1"
                                    className="rounded-3xl w-full hover:scale-110 transform duration-200"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <H3>{service?.service_name}</H3>
                            <Paragraph>{service?.short_description}</Paragraph>
                            <IButton
                                isLink={true}
                                variant="link-border"
                                url={`/services/${service.id}`}
                            >
                                Learn More
                            </IButton>
                        </div>
                    </div>
                );
            })}
            {Object.keys(services).length === 0 && (
                <div className="flex justify-center min-h-screen">
                    <span className="bg-gray-100 py-4 px-6 rounded-xl block w-max text-center h-min">
                        Data not available
                    </span>
                </div>
            )}
        </section>
    );
};

export default ServiceListing;
