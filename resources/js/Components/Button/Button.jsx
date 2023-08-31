import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const IButton = (props) => {
    const { action, children, type, variant, isLink, url } = props;

    const buttonStyle = {
        primary:
            "w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
        "normal-link":
            "w-max font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
        "link-border":
            "w-max bg-white border border-iapm-dark-gray px-4 py-3 rounded-full font-popins text-iapm-black font-medium block flex gap-4 whitespace-nowrap",
        "cta-button":
            "w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins border border-iapm-black text-iapm-black font-medium block flex gap-4 whitespace-nowrap ",
    };

    useEffect(() => {}, []);

    const handleAction = () => {
        action();
    };

    return (
        <>
            {isLink === true ? (
                <Link href={url} className={buttonStyle[variant]}>
                    {children}
                </Link>
            ) : (
                <button
                    className={buttonStyle[variant]}
                    type={type}
                    onClick={handleAction}
                >
                    {children}
                </button>
            )}
        </>
    );
};

export default IButton;
