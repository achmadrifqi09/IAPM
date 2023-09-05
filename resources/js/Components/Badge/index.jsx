import React from "react";
import { Caption } from "../Text";

const Badge = (props) => {
    const { children } = props;

    return (
        <span className="block py-1 px-2 bg-iapm-light-gray rounded-full border border-gray-200">
            <Caption>{children}</Caption>
        </span>
    );
};

export default Badge;
