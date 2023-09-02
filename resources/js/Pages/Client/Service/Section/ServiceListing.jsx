import React from "react";
import DummyImage from "../../../../../../public/assets/images/dummy/bg-service.jpg";
import { H3, Paragraph } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
const ServiceListing = (props) => {
    const {} = props;
    return (
        <section className="max-w-screen-xl mx-auto px-6 md:px-8 mb-16">
            <div className="grid grid-cols-2 gap-6 items-center max-md:grid-cols-1 ">
                <div className="md:pr-16">
                    <img
                        src={DummyImage}
                        alt="image product 1"
                        className="rounded-3xl w-full"
                    />
                </div>
                <div className="space-y-6">
                    <H3>
                        Business Analyst & <br />
                        Portfolio Management
                    </H3>
                    <Paragraph>
                        Analisa bisnis dan portofolio Manajemen strategis dan
                        Resiko bisnis Product Management (Design and Technical
                        Writers) Data Analytics
                    </Paragraph>
                    <IButton isLink={true} variant="link-border">
                        Learn More
                    </IButton>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 items-center max-md:grid-cols-1 my-10">
                <div className="space-y-6 order-2 md:order-1">
                    <H3>
                        Business Analyst & <br />
                        Portfolio Management
                    </H3>
                    <Paragraph>
                        Analisa bisnis dan portofolio Manajemen strategis dan
                        Resiko bisnis Product Management (Design and Technical
                        Writers) Data Analytics
                    </Paragraph>
                    <IButton isLink={true} variant="link-border">
                        Learn More
                    </IButton>
                </div>
                <div className="md:pr-16 order-1 md:order-2">
                    <img
                        src={DummyImage}
                        alt="image product 1"
                        className="rounded-3xl w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceListing;
