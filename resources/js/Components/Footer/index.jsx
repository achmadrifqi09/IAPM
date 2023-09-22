import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../../../public/assets/images/dark-logo.svg";
import { H6 } from "../Text";
import {
    MapPinIcon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import SocialIcon from "../Icon";

const Footer = (props) => {
    const { attributes } = props;

    return (
        <footer className="bg-iapm-baltic-sea text-iapm-gray">
            <div className=" grid grid-cols-4 max-lg:grid-cols-1 max-w-screen-xl mx-auto py-16 font-poppins px-6 md:px-6 gap-8 box-border">
                <div className="w-max">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="col-span-3">
                    <ul className="grid md:grid-flow-col md:auto-cols-auto gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 lg:justify-items-end">
                        <li className="space-y-4">
                            <H6 isDark={true}>Menu</H6>
                            <div className="space-y-2">
                                <Link
                                    href="/"
                                    className="block text-iapm-gray text-base"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/services"
                                    className="block text-iapm-gray text-base"
                                >
                                    Service
                                </Link>
                                <Link
                                    href="/contacts"
                                    className="block text-iapm-gray text-base"
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="block text-iapm-gray text-base"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/blogs"
                                    className="block text-iapm-gray text-base"
                                >
                                    Blog
                                </Link>
                            </div>
                        </li>
                        <li className="space-y-4">
                            <H6 isDark={true}>Address</H6>
                            <div className="space-y-2">
                                {attributes?.addresses.map((address, i) => {
                                    return (
                                        <div
                                            className="flex gap-2 max-w-[30ch]"
                                            key={i}
                                        >
                                            <div className="w-6 h-6">
                                                <MapPinIcon className="w-6 h-6 block text-iapm-gray" />
                                            </div>

                                            <span className="block text-iapm-gray text-base">
                                                {address.address}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                        <li className="space-y-4">
                            <H6 isDark={true}>Contact</H6>
                            <div className="space-y-2 ">
                                {attributes?.contacts.map((contact, i) => {
                                    return (
                                        <div
                                            className="flex gap-2 items-center"
                                            key={i}
                                        >
                                            <div className="w-6 h-6">
                                                {contact?.contact_type ===
                                                "Email" ? (
                                                    <EnvelopeIcon className="w-6 h-6 block text-iapm-gray" />
                                                ) : (
                                                    <PhoneIcon className="w-6 h-6 block text-iapm-gray" />
                                                )}
                                            </div>
                                            <span className="block text-iapm-gray text-base">
                                                {contact.contact}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="flex justify-between items-center py-6 border-t border-t-iapm-dark-gray 
            max-w-screen-xl mx-auto px-6 md:px-6 max-md:flex-col max-md:justify-center gap-4"
            >
                <div className="flex flex-wrap gap-2 justify-center items-center">
                    {attributes?.socials.map((socials, i) => {
                        return (
                            <a href={socials.link} target="_blank" key={i}>
                                <SocialIcon url={socials.link} />
                            </a>
                        );
                    })}
                </div>
                <span className="text-iapm-gray block">
                    Copyright © PT IAPM Elinksolution Indonesia 2023
                </span>
            </div>
        </footer>
    );
};

export default Footer;
