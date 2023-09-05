import * as yup from "yup";

const serviceValidationSchema = yup.object().shape({
    service_name: yup
        .string()
        .required("Service name must be filled in")
        .min(6, "Service name must be at least 6 characters"),
    short_description: yup
        .string()
        .required("Short description must be filled in")
        .min(10, "Short description be at least 10 characters"),
    image: yup.mixed().required("Service Image must be filled in"),
    description: yup.string().required("Service description must be filled in"),
});

const fileValidationSchema = yup.object().shape({
    file_name: yup
        .string()
        .required("File name must be filled in")
        .min(3, "File name must be at least 3 character"),
    file_type: yup
        .string()
        .required("File type must be filled in")
        .test(
            "file type validation",
            "error message",
            (value, validationContext) => {
                const { createError } = validationContext;

                if (value !== "Image" && value !== "Video") {
                    return createError({
                        message: "File type must be image or video ",
                    });
                }

                return true;
            }
        ),
    file: yup.mixed().required("Asset file must be filled in"),
});

export { serviceValidationSchema, fileValidationSchema };
