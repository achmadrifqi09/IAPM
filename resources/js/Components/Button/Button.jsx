import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const IButton = (props) => {
    const {
        action,
        children,
        type,
        variant,
        isLink,
        url,
        isLoading,
        isDisable = false,
    } = props;

    const buttonStyle = {
        primary:
            "w-max bg-iapm-yellow px-4 py-3 rounded-xl font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap disabled:opacity-60",
        "normal-link":
            "w-max font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap",
        "link-border":
            "w-max border border-iapm-dark-gray px-4 py-3 rounded-xl font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap",
        "cta-button":
            "w-max bg-iapm-yellow px-4 py-3 rounded-xl font-popins border border-iapm-black text-iapm-black font-medium flex gap-4 whitespace-nowrap ",
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
                    onClick={action && handleAction}
                    disabled={isDisable}
                >
                    {isLoading ? (
                        <>
                            <ArrowPathIcon className="w-6 h-6 text-iapm-black animate-spin" />
                            <span className="text-iapm-black block">
                                Loading ...
                            </span>
                        </>
                    ) : (
                        children
                    )}
                </button>
            )}
        </>
    );
};

export default IButton;
