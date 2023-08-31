import React from "react";

const H5 = (props) => {
    const { children, isBold } = props

    return (
        <h5 className="text-lg font-semibold text-iapm-black leading-relaxed">
            {children}
        </h5>
    );
};

export default H5;
