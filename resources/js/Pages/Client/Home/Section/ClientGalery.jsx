import React from "react";
import { Subtitle } from "../../../../Components/Text";

const ClientGalery = (props) => {
    const { clients, title } = props;
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    return (
        <section className="w-full max-w-screen-xl mx-auto px-6 md:px-8 my-28">
            <div>
                <Subtitle>{title}</Subtitle>
                <div className="flex items-center justify-evenly mt-4 flex-wrap gap-6 md:gap-12">
                    {clients.map((client, i) => {
                        return (
                            <div className="max-w-[180px] box-border" key={i}>
                                <img
                                    src={`${baseUrlAsset}/${client?.image}`}
                                    alt={`Logo of ${client?.client_name} Client`}
                                    className="w-full h-auto aspect-video object-contain object-center"
                                    loading="lazy"
                                />
                            </div>
                        );
                    })}
                    {Object.keys(clients).length == 0 && (
                        <div className="flex justify-start">
                            <span className="bg-gray-100 py-4 px-6 rounded-xl block w-max text-center">
                                Data not available
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClientGalery;
