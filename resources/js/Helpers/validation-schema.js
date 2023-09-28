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

            if (contact_type === "Email") {
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

const companyDescriptionSchema = yup.object().shape({
    description: yup
        .string()
        .required("Description must be filledin")
        .min(10, "Description must contain at least 10 characters"),
});

const companyVisionSchema = yup.object().shape({
    vision: yup
        .string()
        .required("Vision must be filledin")
        .min(10, "Vision must contain at least 10 characters"),
});

const companyMissionSchema = yup.object().shape({
    mission: yup
        .string()
        .required("Mission must be filledin")
        .min(10, "Mission must contain at least 10 characters"),
});

const historyDevelopmentValidationSchema = yup.object().shape({
    year: yup
        .number()
        .required("Year must be filled in")
        .min(4, "Year must contain at least 4 character"),
    history_description: yup
        .string()
        .required("History description must be filled in")
        .min(10, "History description must contain at least 10 character"),
});

const signInValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email must be filled in")
        .test("contact-test", "error message", (value, validationContext) => {
            const { createError } = validationContext;

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return createError({
                    message: "Invalid email format",
                });
            }

            return true;
        }),
    password: yup
        .string()
        .required("Password must be filled in")
        .min(8, "Password must be contain at least 8 character"),
});

const sendMailValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name must be filled in")
        .matches(/^[A-Za-z ]*$/, "Please enter valid name"),

    email: yup
        .string()
        .email("Invalid email format")
        .required("Email must be filled in")
        .test("contact-test", "error message", (value, validationContext) => {
            const { createError } = validationContext;

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return createError({
                    message: "Invalid email format",
                });
            }

            return true;
        }),
    message: yup
        .string()
        .required("Message must be filled in")
        .min(10, "Message must be contain at least 10 character"),
    token: yup.mixed().required("ReCaptcha must be filled in"),
});

const clientValidationSchema = yup.object().shape({
    client_name: yup
        .string()
        .required("Client name must be filled in")
        .min(3, "Client name must be contain at least 3 character"),
    image: yup.mixed().required("Logo must be filled in"),
});

const updateAccountValidationSchema = yup.object().shape(
    {
        name: yup
            .string()
            .nullable()
            .notRequired()
            .min(3, "Name must be contain at least 3 character"),
        email: yup.string().when("email", {
            is: (value) => value?.length,
            then: () =>
                yup
                    .string()
                    .required()
                    .test(
                        "email-test",
                        "error message",
                        (value, validationContext) => {
                            const { createError } = validationContext;

                            if (
                                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                                    value
                                )
                            ) {
                                return createError({
                                    message: "Invalid email format",
                                });
                            }

                            return true;
                        }
                    ),
            otherwise: () => yup.string().nullable().notRequired(),
        }),
        old_password: yup.string().when("old_password", {
            is: (value) => value?.length,
            then: () =>
                yup
                    .string()
                    .required("Old Password must be filled in")
                    .min(
                        8,
                        "Old Password must be contain at least 8 character"
                    ),

            otherwise: () => yup.string().nullable().notRequired(),
        }),
        password: yup.string().when("password", {
            is: (value) => value?.length,
            then: () =>
                yup
                    .string()
                    .required("Password must be filled in")
                    .min(8, "Password must be contain at least 8 character"),

            otherwise: () => yup.string().nullable().notRequired(),
        }),
        password_confirmation: yup.string().when("password_confirmation", {
            is: (value) => value?.length,
            then: () =>
                yup
                    .string()
                    .required("Password confirmation must be filled in")
                    .min(8, "Old Password must be contain at least 8 character")
                    .oneOf([yup.ref("password"), null], "Passwords must match"),

            otherwise: () => yup.string().nullable().notRequired(),
        }),
        on_time_password: yup.string().when(["password", "old_password"], {
            is: (password, old_password) =>
                password?.length || old_password?.length,
            then: () =>
                yup
                    .string()
                    .required("On time password must be filled in")
                    .test(
                        "on_time_password-test",
                        "error message",
                        (value, validationContext) => {
                            const { createError } = validationContext;
                            console.log(value);
                            if (value?.length !== 6) {
                                return createError({
                                    message:
                                        "On time password consists of 6 numbers",
                                });
                            }

                            if (isNaN(value)) {
                                return createError({
                                    message: "On time password must a numbers",
                                });
                            }

                            return true;
                        }
                    ),
            otherwise: () => yup.string().nullable().notRequired(),
        }),
    },
    [
        ["email", "email"],
        ["old_password", "old_password"],
        ["password", "password"],
        ["password_confirmation", "password_confirmation"],
        ["old_password", "password"],
    ]
);

export {
    serviceValidationSchema,
    assetValidationSchema,
    testimonialValidationSchema,
    contactValidationSchema,
    addressValidationSchema,
    socialValidationSchema,
    postValidationSchema,
    categoryValidationSchema,
    companyDescriptionSchema,
    companyMissionSchema,
    companyVisionSchema,
    historyDevelopmentValidationSchema,
    signInValidationSchema,
    sendMailValidationSchema,
    clientValidationSchema,
    updateAccountValidationSchema,
};
