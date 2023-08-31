import React from "react";

const H1 = ({ children }) => {
    return (
        <h1 className="text-4xl font-semibold max-md:text-3xl text-iapm-black leading-relaxed">
            {children}
        </h1>
    );
};

export default H1;
