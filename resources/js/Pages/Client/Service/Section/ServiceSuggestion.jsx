import React from "react";
import { H3, H5 } from "../../../../Components/Text";
import DummyImage from "../../../../../../public/assets/images/dummy/bg-service.jpg";
import IButton from "../../../../Components/Button/Button";
import DefaultImage from "../../../../../../public/assets/images/default-images/3dLogo.svg";

const ServiceSuggestion = (props) => {
    const { services } = props;
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    return (
        <section className="py-24">
            <div className="max-w-screen-xl space-y-8 mx-auto px-6 md:px-8">
                <H3>Our other services</H3>
                <div className="grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {services.map((service, i) => {
                        return (
                            <div className="md:max-w-[320px] space-y-4" key={i}>
                                <img
                                    src={
                                        service?.image
                                            ? `${baseUrlAsset}/${service.image}`
                                            : DefaultImage
                                    }
                                    alt={`Image from ${service.service_name} service`}
                                    className="aspect-square rounded-xl object-cover w-auto"
                                />
                                <H5>{service?.service_name}</H5>
                                <IButton
                                    isLink={true}
                                    variant="link-border"
                                    url={`/services/${service?.id}`}
                                >
                                    Learn More
                                </IButton>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceSuggestion;
