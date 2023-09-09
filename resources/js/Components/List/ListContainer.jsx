import React from "react";

const ListContainer = (props) => {
    const { children } = props;
    return <ul className="space-y-3 w-full">{children}</ul>;
};

export default ListContainer;
