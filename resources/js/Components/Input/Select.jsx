import React from "react";
import Select from "react-select";

const ISelect = (props) => {
    const {
        options,
        defaultValue,
        selectLabel,
        selectId,
        selectName,
        errorMessage,
        onChange,
        isMulti,
    } = props;
    const styles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#f3f4f6",
            color: "#1A1C29",
            borderRadius: "8px",
            paddingTop: "7px",
            paddingBottom: "7px",
            marginTop: "4px",
            fontSize: "16px",
            boxShadow: state.isFocused ? 0 : 0,
            border: "none",
        }),

        menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#f3f4f6",
            color: "#1A1C29",
            fontSize: "16px",
        }),
        option: (baseStyle, state) => ({
            ...baseStyle,
            backgroundColor: state.isSelected ? "#FDC204" : null,
            color: state.isSelected ? "#1A1C29" : null,
        }),
    };

    const handleChange = (event) => {
        let target = {
            name: selectName,
            value: event.value,
        };

        onChange(target);
    };

    const isDefaultValue = (e) => e.value === defaultValue;

    return (
        <div className="my-4 w-full space-y-1 font-poppins">
            <label
                htmlFor={selectId}
                className="text-iapm-dark-gray font-normal block"
            >
                {selectLabel}
            </label>
            <Select
                isMulti={isMulti}
                onChange={handleChange}
                options={options}
                id={selectId}
                name={selectName}
                value={
                    defaultValue && options[options.findIndex(isDefaultValue)]
                }
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        primary25: "#FDC204",
                        primary: "#1A1C29",
                    },
                })}
                styles={styles}
            />
            {errorMessage && (
                <span className="text-iapm-red text-sm">{errorMessage}</span>
            )}
        </div>
    );
};

export default ISelect;
