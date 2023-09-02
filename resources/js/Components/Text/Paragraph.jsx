import React from "react";
const Paragraph = (props) => {
    const { children, isDark } = props;

    const textStyle = {
        light: "leading-relaxed text-iapm-dark-gray",
        dark: "leading-relaxed text-iapm-light-gray",
    };
    return (
        <p className={isDark === true ? textStyle.dark : textStyle.light}>
            {children}
        </p>
    );
};

export default Paragraph;
