import React from "react";

const FloatingButton = (props) => {
    const { children, action } = props;

    const hanldeClick = () => {
        action();
    };

    return (
        <button
            className="p-3 bg-iapm-yellow rounded-full fixed bottom-6 right-12 z-50 shadow-xl"
            onClick={hanldeClick}
        >
            {children}
        </button>
    );
};

export default FloatingButton;
