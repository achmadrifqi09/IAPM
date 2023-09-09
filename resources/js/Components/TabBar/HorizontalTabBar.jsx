import React, { useState } from "react";

const HorizontalTabBar = (props) => {
    const [menuIndex, setMenuIndex] = useState(0);
    const { menus, menuAction } = props;

    const tabBarStyle = {
        normal: "w-full border-b border-b-gray-300 text-iapm-dark-gray",
        active: "w-full border-b border-b-iapm-dark-gray h-full py-2",
    };

    const handelClickMenu = (e, index) => {
        setMenuIndex(index);
        menuAction(e.target.innerText);
    };

    return (
        <div className="w-full flex  ">
            {menus.map((menu, i) => {
                return (
                    <button
                        className={
                            i === menuIndex
                                ? tabBarStyle.active
                                : tabBarStyle.normal
                        }
                        key={i}
                        onClick={(e) => handelClickMenu(e, i)}
                    >
                        {menu.label}
                    </button>
                );
            })}
        </div>
    );
};

export default HorizontalTabBar;
