const getErrorMessage = (errors) => {
    let errorMessage = "";

    Object.keys(errors).forEach((value, i) => {
        return (errorMessage += `${errors[value]} ${
            i === Object.keys(errors).length - 1 ? "" : ", "
        }`);
    });
    return errorMessage;
};

export default getErrorMessage;
