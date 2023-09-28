import React from "react";
import { H1, Paragraph } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
import DefaultImage from "../../../../../../public/assets/images/default-images/home-hero-img.jpg";

const Hero = (props) => {
    const { title, description, image, buttonLabel, buttonUrl } = props;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center px-6 md:px-8 gap-16 pt-20 max-md:pt-16">
            <div className="w-full space-y-8">
                <H1>{title}</H1>
                <Paragraph>{description}</Paragraph>
                <IButton isLink={true} url={buttonUrl} variant="primary">
                    {buttonLabel}
                </IButton>
            </div>
            <div className="flex justify-center gap-6 box-border">
                <img
                    src={image ? image : DefaultImage}
                    alt="image of hero section"
                />
            </div>
        </section>
    );
};

export default Hero;
