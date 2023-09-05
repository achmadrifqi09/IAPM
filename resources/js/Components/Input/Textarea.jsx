import React from "react";

const ITextarea = (props) => {
    const {
        textareaLabel,
        textareaName,
        textareaId,
        defaultValue,
        onChange,
        textareaType,
        errorMessage,
    } = props;

    const handleChange = (e) => {
        onChange(e.target);
    };

    return (
        <div className="my-4 w-full space-y-1">
            <label
                htmlFor={textareaId}
                className="text-iapm-dark-gray block text-base font-poppins"
            >
                {textareaLabel}
            </label>
            <textarea
                type={textareaType}
                name={textareaName}
                id={textareaId}
                value={defaultValue}
                onChange={handleChange}
                className=" bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow"
            />
            {!!errorMessage && (
                <span className="text-sm text-iapm-red block">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default ITextarea;
