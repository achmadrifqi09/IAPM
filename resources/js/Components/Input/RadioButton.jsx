import React from "react";

const IRadioButton = (props) => {
    const { onChange, radios, radioName, errorMessage } = props;
    const handleChange = (e) => {
        onChange(e.target);
    };
    return (
        <div className="my-4 w-full space-y-1">
            {radios?.map((item, i) => {
                return (
                    <div key={i}>
                        <input
                            onChange={handleChange}
                            type="radio"
                            id={item?.label.split(" ").join("_")}
                            name={radioName}
                            value={item?.value}
                            checked={item?.is_default_value}
                        />
                        <label for="html">{item?.label}</label>
                    </div>
                );
            })}
            {!!errorMessage && (
                <span className="text-sm text-iapm-red block">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default IRadioButton;
