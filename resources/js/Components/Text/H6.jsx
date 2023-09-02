import React from "react";

const H6 = (props) => {
    const { children, isDark } = props;
    const textStyle = {
        light: "text-md font-semibold text-iapm-black leading-relaxed",
        dark: "text-md font-semibold text-white leading-relaxed",
    };
    return (
        <h6 className={isDark ? textStyle.dark : textStyle.light}>
            {children}
        </h6>
    );
};

export default H6;
