import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../../../public/assets/images/logo.svg";
import { H6, Paragraph, Caption } from "../Text";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = (props) => {
    return (
        <footer>
            <div className=" grid grid-cols-4 max-w-screen-xl mx-auto py-16 font-poppins px-6 md:px-6 max-lg:grid-cols-1 box-border">
                <div className="w-max">
                    <img src={Logo} alt="logo" />
                </div>

                <div className=" col-span-3">
                    <ul className="grid grid-cols-3 max-md:grid-cols-1">
                        <li className="space-y-4">
                            <H6>Menu</H6>
                            <div className="space-y-2">
                                <Link href="/" className="block">
                                    Home
                                </Link>
                                <Link href="/services" className="block">
                                    Service
                                </Link>
                                <Link href="/" className="block">
                                    About Us
                                </Link>
                                <Link href="/" className="block">
                                    Blog
                                </Link>
                            </div>
                        </li>
                        <li className="space-y-4">
                            <H6>Address</H6>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="w-4 h-4">
                                        <MapPinIcon className="w-4 h-4 block" />
                                    </div>
                                    <Paragraph>
                                        Cenderawasih Green Residence Alamanda
                                        Cluster DE-02 Jember 62881
                                    </Paragraph>
                                </div>
                            </div>
                        </li>
                        <li>
                            <H6>Contact</H6>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <div className="w-6 h-6">
                                        <EnvelopeIcon className="w-4 h-4 block" />
                                    </div>
                                    <Paragraph>
                                        hello@iapmelinksolution.co.id
                                    </Paragraph>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center py-6 border-t border-t-light-gray max-w-screen-xl mx-auto px-6 md:px-6">
                <Paragraph>
                    Copyright © PT IAPM Elinksolution Indonesia 2023
                </Paragraph>
            </div>
        </footer>
    );
};

export default Footer;
