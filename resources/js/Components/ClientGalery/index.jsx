import React from "react";
import Client1 from "../../../../public/assets/images/dummy/client/client-1.svg";
import { Subtitle } from "../Text";

const ClientGalery = (props) => {
    return (
        <section className="w-full max-w-screen-xl mx-auto px-6 md:px-8 my-28">
            <div>
                <Subtitle>Successful Project & Business Lecturing</Subtitle>
                <div className="flex items-center justify-evenly mt-4 flex-wrap gap-6 md:gap-12">
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                    <div className="max-w-[260px] box-border">
                        <img
                            src={Client1}
                            alt="clien logo"
                            className="w-full h-auto aspect-square object-contain object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientGalery;
