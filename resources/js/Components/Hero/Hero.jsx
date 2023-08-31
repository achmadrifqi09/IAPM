import React from "react";
import { H1, Paragraph } from "../Text/";
import IButton from "../Button/Button";

const Hero = (props) => {
    const { title, description, largeImage, smallImage } = props;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto items-center px-6 md:px-8 gap-16 pt-16">
            <div className="w-full space-y-8">
                <H1>{title}</H1>
                <Paragraph>{description}</Paragraph>
                <IButton isLink={true} url="/services" variant="primary">
                    Explore a Service
                </IButton>
            </div>
            <div className="flex justify-center gap-6 box-border">
                <span
                    className="block w-64 max-md:w-48 h-[24rem] max-md:h-72 rounded-full mt-20 bg-cover bg-no-repeat bg-center relative before:content-[''] 
                    before:block before:w-24 before:h-24 before:bg-rounded-shape before:absolute before:bg-no-repeat before:bg-center before:right-0 
                    before:-top-24 before:max-md:-top-28 after:block after:w-48 after:h-full after:bg-chart after:absolute after:bg-no-repeat after:bg-center 
                    after:-left-20 after:-bottom-28 after:max-md:-left-6"
                    style={{ backgroundImage: `url('${largeImage}')` }}
                ></span>
                <span
                    className="block w-56 max-md:w-36 h-80 max-md:h-48  rounded-full bg-cover bg-no-repeat bg-center relative after:content-[''] 
                    after:block after:w-full after:h-full after:bg-triangle-shape after:absolute after:bg-no-repeat after:bg-center after:bg-contain 
                    after:right-0 after:-bottom-64"
                    style={{ backgroundImage: `url('${smallImage}')` }}
                ></span>
            </div>
        </section>
    );
};

export default Hero;
