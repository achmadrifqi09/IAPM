import React from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../../../public/assets/images/logo.svg";

const Navbar = () => {
    return (
        <nav className="w-full font-poppins bg-white px-6 md:px-8 top-0 z-50 bg-opacity-60 backdrop-blur">
            <div className="py-4 flex max-w-screen-xl justify-between mx-auto items-center">
                <Link href="/">
                    <img src={Logo} alt="IAPM Logo" />
                </Link>
                <ul className="flex gap-10">
                    <li className="font-medium">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="text-iapm-dark-gray">
                        <Link href="/services">Services</Link>
                    </li>
                    <li className="text-iapm-dark-gray">
                        <Link href="/about-us">About</Link>
                    </li>
                    <li className="text-iapm-dark-gray">
                        <Link href="/about-us">Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
