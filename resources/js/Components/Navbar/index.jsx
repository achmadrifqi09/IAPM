import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import Logo from "../../../../public/assets/images/logo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isNavbar, setNavbar] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("/");
    const menusRef = useRef(null);

    const menusStyle = {
        active: "font-medium text-center",
        normal: "text-iapm-dark-gray text-center",
    };

    const hanldeNavbarMenu = () => {
        setNavbar((current) => !current);
    };

    useEffect(() => {
        if (menusRef) {
            const currentUrl = window.location.pathname;
            setCurrentUrl(currentUrl);
        }
    }, []);

    return (
        <nav className="w-full font-poppins bg-white px-6 md:px-8 z-50 bg-opacity-60 backdrop-blur ">
            <div className="py-4 flex max-w-screen-xl justify-between mx-auto items-center">
                <Link href="/">
                    <img src={Logo} alt="IAPM Logo" />
                </Link>
                <ul
                    className={`flex gap-10 max-md:absolute max-md:flex-col max-md:bg-white max-md:top-[72px] max-md:w-full max-md:left-0 max-md:justify-center max-md:py-6 ${
                        isNavbar ? "" : "max-md:hidden"
                    }`}
                    ref={menusRef}
                >
                    <li
                        className={
                            currentUrl === "/"
                                ? menusStyle.active
                                : menusStyle.normal
                        }
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={
                            currentUrl.includes("/services")
                                ? menusStyle.active
                                : menusStyle.normal
                        }
                    >
                        <Link href="/services">Services</Link>
                    </li>
                    <li
                        className={
                            currentUrl.includes("/about-us")
                                ? menusStyle.active
                                : menusStyle.normal
                        }
                    >
                        <Link href="/about-us">About</Link>
                    </li>
                    <li
                        className={
                            currentUrl.includes("/blogs")
                                ? menusStyle.active
                                : menusStyle.normal
                        }
                    >
                        <Link href="/blogs">Blog</Link>
                    </li>
                </ul>
                <button className="p-2 md:hidden" onClick={hanldeNavbarMenu}>
                    {isNavbar ? (
                        <XMarkIcon className="w-6 h-6 text-iapm-black" />
                    ) : (
                        <Bars3BottomRightIcon className="w-6 h-6 text-iapm-black" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
