import React from "react";
import { H3, Paragraph } from "../Text";
import ICCollaborate from "../../../../public/assets/images/ic-collaborate.svg";
import IButton from "../Button/Button";

const CTA = () => {
    return (
        <section className="w-full ">
            <div className="bg-lines bg-cover bg-no-repeat py-16 bg-iapm-yellow">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                    <div className="flex items-center gap-6 max-md:flex-col col-span-2">
                        <img
                            src={ICCollaborate}
                            alt="icon of collaborate"
                            className="w-28 h-28 "
                        />
                        <div className="max-md:text-center">
                            <H3>Let's make something extraordinary</H3>
                            <Paragraph>
                                You can contact us to get more information or
                                collaborate
                            </Paragraph>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <IButton isLink={true} url="/" variant="cta-button">
                            Contact Us
                        </IButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
