import React from "react";

const ListItem = (props) => {
    const { children, isEmpty } = props;
    const listStyle = {
        normal: "bg-gray-100 rounded-2xl flex justify-between items-center p-4 max-sm:flex-col max-sm:justify-left max-sm:items-start max-sm:gap-4 box-border",
        noData: "bg-gray-100 rounded-2xl flex justify-center items-center p-4",
    };
    return (
        <li className={isEmpty ? listStyle.noData : listStyle.normal}>
            {children}
        </li>
    );
};

export default ListItem;
