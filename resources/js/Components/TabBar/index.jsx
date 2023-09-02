import React, { useEffect, useState } from "react";

const TabBar = (props) => {
    const { children, datas, onClickMenu } = props;
    const [activeMenu, setActiveMenu] = useState(0);

    const handleClickMenu = (index) => {
        setActiveMenu(index);
        onClickMenu(index);
    };

    useEffect(() => {
        setActiveMenu(0);
    }, []);

    return (
        <div className="grid md:grid-flow-col lg:auto-cols-fr md:auto-cols-auto gap-6 max-md:grid-cols-1">
            <ul className="md:space-y-12 max-md:flex max-md:justify-start max-md:gap-6 max-sm:flex-wrap max-md:items-center w-full">
                {datas.map((val, i) => {
                    return (
                        <li key={i}>
                            <button onClick={() => handleClickMenu(i)}>
                                {i == activeMenu ? (
                                    <h3 className="text-3xl max-md:text-2xl text-iapm-black font-semibold">
                                        {val.year}
                                    </h3>
                                ) : (
                                    <h3 className="text-3xl max-md:text-2xl text-iapm-gray font-semibold">
                                        {val.year}
                                    </h3>
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <div className="w-full space-y-8 col-span-3">{children}</div>
        </div>
    );
};

export default TabBar;
