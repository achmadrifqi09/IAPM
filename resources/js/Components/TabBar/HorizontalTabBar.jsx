import React, { useState } from "react";

const HorizontalTabBar = (props) => {
    const [menuIndex, setMenuIndex] = useState(0);
    const { menus, menuAction } = props;

    const tabBarStyle = {
        normal: "w-full text-iapm-gray p-2",
        active: "w-full p-2 bg-iapm-yellow rounded-lg",
    };

    const handelClickMenu = (e, index) => {
        setMenuIndex(index);
        menuAction(e.target.innerText);
    };

    return (
        <div className="w-full flex pb-2 border-b border-b-iamp-gray items-starch">
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
