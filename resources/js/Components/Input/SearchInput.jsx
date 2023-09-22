import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchInput = (props) => {
    const { onChange, inputType, inputName, inputId } = props;

    const handleChangeSearch = (e) => {
        onChange(e.target);
    };

    return (
        <div>
            <div className="relative flex gap-6 z-0">
                <div className="absolute inset-x-0 flex items-center h-full px-6 w-min">
                    <MagnifyingGlassIcon className="w-6 h-6 text-iapm-dark-gray" />
                </div>
                <input
                    autoComplete="off"
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    placeholder="Search ..."
                    className="w-full bg-gray-100 py-3 pl-16  rounded-xl border-gray-100 dark:focus:border-iapm-yellow focus:border-iapm-yellow"
                    onChange={handleChangeSearch}
                />
            </div>
        </div>
    );
};

export default SearchInput;
