import React from "react";

const H2 = (props) => {
    const { children, isDark } = props;

    const textStyle = {
        light: "text-3xl font-semibold text-iapm-black leading-relaxed",
        dark: "text-3xl font-semibold text-white leading-relaxed",
    };

    return (
        <h2 className={isDark === true ? textStyle.dark : textStyle.light}>
            {children}
        </h2>
    );
};

export default H2;
