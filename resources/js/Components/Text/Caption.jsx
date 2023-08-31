import React from "react";

const Caption = (props) => {
    const { children } = props;
    return (
        <span className="text-sm font-poppins text-iapm-black block">
            {children}
        </span>
    );
};

export default Caption;
