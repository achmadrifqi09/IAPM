import * as yup from "yup";

const serviceValidationSchema = yup.object().shape({
    service_name: yup
        .string()
        .required("Service name must be filled in")
        .min(6, "The service name must contain at least 6 characters"),
    short_description: yup
        .string()
        .required("Short description must be filled in")
        .min(10, "The short description must contain at least 10 characters"),
    image: yup.mixed().required("Service Image must be filled in"),
    description: yup.string().required("Service description must be filled in"),
});

const assetValidationSchema = yup.object().shape({
    asset_name: yup
        .string()
        .required("File name must be filled in")
        .min(3, "The file name must contain at least 3 characters"),
    asset_type: yup
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

const testimonialValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name must be filled in")
        .min(3, "The name must contain at least 3 characters"),
    position: yup
        .string()
        .required("Position must be filled in")
        .min(3, "The position must contain at least 3 characters"),
    quote: yup
        .string()
        .required("Qote must be filled in")
        .min(8, "The quote must contain at least 8 characters"),
});

const contactValidationSchema = yup.object().shape({
    contact_type: yup
        .string()
        .required("Contact type must be filled in")
        .min(3),
    contact: yup
        .string()
        .required("This input field is required")
        .min(3, "The contact must contain at least 3 characters")
        .test("contact-test", "error message", (value, validationContext) => {
            const {
                createError,
                parent: { contact_type },
            } = validationContext;
            if (!value) {
                return createError({
                    message: "Contact field is required",
                });
            }

            if (contact_type === "Mail") {
                if (
                    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                ) {
                    return createError({
                        message: "Invalid email format",
                    });
                }
            }

            if (contact_type == "WhatsApp" || contact_type === "Telephone") {
                if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(value)) {
                    return createError({
                        message: "Invalid phone number format",
                    });
                }
            }

            if (contact_type === "Telegram") {
                if (!/^[a-zA-Z0-9]+$/.test(value)) {
                    return createError({
                        message: "Username invalid",
                    });
                }
            }
            return true;
        }),
});

const addressValidationSchema = yup.object().shape({
    address: yup
        .string()
        .required("Address must be filled in")
        .min(15, "The address must contain at least 15 characters"),
});

const socialValidationSchema = yup.object().shape({
    social_type: yup
        .string()
        .required("Social media type must be filled in")
        .min(3),
    username: yup.string().required("Username must be filled").min(3),
    link: yup
        .string()
        .required("Social media link must be filled in")
        .matches(
            /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
            {
                message: "Invalid link format",
            }
        ),
});

const postValidationSchema = yup.object().shape({
    title: yup
        .string()
        .required("Title must be filled in")
        .min(10, "The title must contain at least 10 characters "),
    slug: yup.string().required("Complete the title to create the slug"),
    status: yup
        .string()
        .required("Status must be filled in")
        .test(
            "status type validation",
            "error message",
            (value, validationContext) => {
                const { createError } = validationContext;

                if (value !== "Published" && value !== "Draft") {
                    return createError({
                        message: "Status must be Published or Draft",
                    });
                }

                return true;
            }
        ),
});

const categoryValidationSchema = yup.object().shape({
    category_name: yup
        .string()
        .required("Category name must be filled in")
        .min(3, "Category name must contain at least 3 characters"),
});

export {
    serviceValidationSchema,
    assetValidationSchema,
    testimonialValidationSchema,
    contactValidationSchema,
    addressValidationSchema,
    socialValidationSchema,
    postValidationSchema,
    categoryValidationSchema,
};
