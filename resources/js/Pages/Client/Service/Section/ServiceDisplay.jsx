import React from "react";
import DefaultImage from "../../../../../../public/assets/images/default-images/3dLogo.svg";
import { H2 } from "../../../../Components/Text";

const ServiceDisplay = (props) => {
    const { service } = props;
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;

    return (
        <section className="min-h-screen py-16">
            <div className=" max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-2 max-md:grid-cols-1 gap-8">
                <img
                    src={
                        service?.image
                            ? `${baseUrlAsset}/${service.image}`
                            : DefaultImage
                    }
                    alt={`Image from ${service.service_name} service`}
                    className="aspect-square object-cover w-full mx-auto rounded-t-[64px] rounded-bl-[64px] sticky top-20 max-md:static"
                />
                <div className="space-y-8">
                    <H2>{service?.service_name}</H2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: service?.description,
                        }}
                        className="space-y-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceDisplay;
