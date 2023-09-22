import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../../public/assets/images/logo.svg";
import { Link, router } from "@inertiajs/react";
import {
    RectangleGroupIcon,
    DocumentTextIcon,
    ChevronDownIcon,
    NewspaperIcon,
    Bars3BottomLeftIcon,
    XMarkIcon,
    UserIcon,
    PhotoIcon,
    ChatBubbleBottomCenterTextIcon,
    BuildingStorefrontIcon,
    WindowIcon,
    BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const SidebarMenu = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [pageSubmenu, setPageSubmenu] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("/dashboard");
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const menusRef = useRef(null);

    const menusStyle = {
        active: "py-2 px-2 rounded-lg bg-iapm-yellow w-full flex gap-4 justify-between",
        normal: "py-2 px-2 hover:bg-gray-100 rounded-lg  w-full flex gap-4 justify-between",
    };

    const asideStyle = {
        normal: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-[77px] transition duration-200 translate-x-0 z-30",
        hidden: "px-6 py-8 bg-white shadow-lg h-screen font-poppins w-72 fixed top-[77px] transition duration-200 -translate-x-72 z-30 ",
    };

    const submenuStyle = {
        normal: "py-2 space-y-2",
        hidden: "hidden",
    };

    const arrowStyle = {
        close: "w-6 h-6 -rotate-90 transition duration-100",
        open: "w-6 h-6 transition duration-100",
    };

    const handleOpenSidebar = () => {
        setSidebarOpen((codition) => !codition);
    };

    const handleOpenPageMenu = () => {
        setPageSubmenu((condition) => !condition);
    };

    const dropdownMenuStyle = {
        open: "bg-white absolute top-16 right-0 py-4 px-6 shadow rounded-lg",
        close: "bg-white absolute top-16 right-0 py-4 px-6 shadow rounded-lg hidden",
    };

    const handelDropdownMenu = () => {
        setDropdownMenu((condition) => !condition);
    };

    useEffect(() => {
        if (menusRef) {
            const currentUrl = window.location.pathname;
            setCurrentUrl(currentUrl);
        }
    }, []);

    const handelSignOut = () => {
        router.post("/logout");
    };

    return (
        <>
            <aside className="relative">
                <div
                    className={
                        sidebarOpen === true
                            ? asideStyle.normal
                            : asideStyle.hidden
                    }
                >
                    <ul className="space-y-4 overflow-y-scroll custom-scrollbar max-h-screen pr-2">
                        <li>
                            <Link
                                href="/dashboard"
                                className={
                                    currentUrl.includes("/dashboard")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                            >
                                <div className="flex gap-4 ">
                                    <RectangleGroupIcon className="w-6 h-6" />
                                    Dashboad
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    currentUrl.includes("/service-products")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                                href="/service-products"
                            >
                                <div className="flex gap-4">
                                    <BuildingStorefrontIcon className="w-6 h-6" />
                                    Services
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    currentUrl.includes("/company")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                                href="/company"
                            >
                                <div className="flex gap-4">
                                    <BuildingOfficeIcon className="w-6 h-6" />
                                    Company
                                </div>
                            </Link>
                        </li>
                        <li className="space-y-4">
                            <button
                                className={
                                    currentUrl.includes("/pages")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                                onClick={handleOpenPageMenu}
                            >
                                <div className="flex gap-4">
                                    <DocumentTextIcon className="w-6 h-6" />
                                    Page
                                </div>

                                <ChevronDownIcon
                                    className={
                                        pageSubmenu === true
                                            ? arrowStyle.open
                                            : arrowStyle.close
                                    }
                                />
                            </button>
                            <ul
                                className={
                                    pageSubmenu === true
                                        ? submenuStyle.normal
                                        : submenuStyle.hidden
                                }
                            >
                                <li>
                                    <Link
                                        className="py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between"
                                        href="/pages/home-page"
                                    >
                                        Home Page
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/about-page"
                                        className="py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between"
                                    >
                                        About Page
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/pages/service-page"
                                        className="py-2 pr-2 pl-10 hover:bg-gray-100 rounded-lg flex gap-4 justify-between"
                                    >
                                        Service Page
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link
                                href="/testimonials"
                                className={
                                    currentUrl.includes("/testimonials")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                            >
                                <div className="flex gap-4">
                                    <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
                                    Testimonial
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/manage-blogs"
                                className={
                                    currentUrl.includes("/manage-blogs")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                            >
                                <div className="flex gap-4">
                                    <NewspaperIcon className="w-6 h-6" />
                                    Blog
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/web-assets"
                                className={
                                    currentUrl.includes("/web-assets")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                            >
                                <div className="flex gap-4">
                                    <PhotoIcon className="w-6 h-6" />
                                    Web Asset
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/web-attributes"
                                className={
                                    currentUrl.includes("/web-attributes")
                                        ? menusStyle.active
                                        : menusStyle.normal
                                }
                            >
                                <div className="flex gap-4">
                                    <WindowIcon className="w-6 h-6" />
                                    Web Attribute
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <nav className="w-full bg-white border-b h-fit fixed py-4 font-poppins z-40 box-border">
                    <div className="flex justify-between max-w-screen-xl w-full items-center mx-auto box-border px-6 md:px-8">
                        <button
                            className=" border-2 border-gray-200 p-2 rounded-lg block"
                            onClick={handleOpenSidebar}
                        >
                            {sidebarOpen === true ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3BottomLeftIcon className="w-6 h-6" />
                            )}
                        </button>
                        <div className="max-sm:hidden">
                            <img src={Logo} alt="IAMP Logo" />
                        </div>
                        <div className="relative">
                            <button
                                className="bg-iapm-yellow p-2 rounded-full  border-2 border-gray-300"
                                onClick={handelDropdownMenu}
                            >
                                <UserIcon className="w-6 h-6" />
                            </button>
                            <div
                                className={
                                    dropdownMenu === true
                                        ? dropdownMenuStyle.open
                                        : dropdownMenuStyle.close
                                }
                            >
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="">Account</Link>
                                    </li>
                                    <li>
                                        <button
                                            className="flex gap-2 whitespace-nowrap"
                                            onClick={handelSignOut}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default SidebarMenu;
