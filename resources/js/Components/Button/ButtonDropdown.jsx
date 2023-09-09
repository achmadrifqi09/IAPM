import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const IButtonDropdown = (props) => {
    const { action, buttonLabel, menus } = props;
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu((currentCondition) => !currentCondition);
    };

    const handleClickMenu = (e) => {
        setOpenMenu(false);
        action(e.target);
    };

    const menuStyle = {
        open: "p-4 bg-white border border-gray-200 rounded-2xl absolute top-14 tex-left w-full left-0",
        close: "p-4 bg-white border border-gray-200 rounded-2xl absolute top-14 tex-left w-full left-0 hidden",
    };

    return (
        <div className="relative w-max">
            <button
                onClick={handleOpenMenu}
                className="relative w-max bg-iapm-yellow px-4 py-3 rounded-full font-popins text-iapm-black font-medium flex gap-4 whitespace-nowrap"
            >
                <span className="text-iapm-black block">{buttonLabel}</span>
                <ChevronDownIcon className="w-6 h-6 text-iapm-black" />
            </button>
            <div className={isOpenMenu ? menuStyle.open : menuStyle.close}>
                <ul className="flex flex-col justify-start items-start">
                    {menus.map((menu, i) => {
                        return (
                            <button
                                className="text-iapm-dark-gray py-3 whitespace-nowrap w-full text-left"
                                key={i}
                                onClick={handleClickMenu}
                                aria-label={menu.ariaLabel}
                            >
                                {menu.label}
                            </button>
                        );
                    })}
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default IButtonDropdown;
