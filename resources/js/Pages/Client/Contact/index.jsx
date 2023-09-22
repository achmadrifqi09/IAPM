import React, { useRef, useEffect, useState } from "react";
import ClientLayout from "../../../Layouts/client-layout";
import { Head, router } from "@inertiajs/react";
import { H5, H2, Paragraph } from "../../../Components/Text";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import IButton from "../../../Components/Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
import getErrorMessage from "../../../Helpers/error-message";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    BellAlertIcon,
} from "@heroicons/react/24/outline";
import { sendMailValidationSchema } from "../../../Helpers/validation-schema";
import { useFormik } from "formik";

const Contact = (props) => {
    const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const { attributes, flash, errors } = props;
    const [messageInfo, setMessageInfo] = useState("");
    const [isToast, setToast] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const reCaptchaRef = useRef(null);
    const contactFormRef = useRef(null);

    const contactLink = {
        Email: {
            link: "mailto:",
        },
        WhatsApp: {
            link: "https://wa.me/",
        },
        Telegram: {
            link: "https://t.me/",
        },
        Telephone: {
            link: "tel:+",
        },
    };

    const handleSubmit = () => {
        router.post("/contacts/send-email", formik.values);
        setLoading(true);
        formik.resetForm();
        reCaptchaRef.current.reset();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
            token: "",
        },
        validationSchema: sendMailValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        if (typeof target === "string") {
            formik.setFieldValue("token", target);
        } else {
            const { name, value } = target;
            formik.setFieldValue(name, value);
        }
    };

    useEffect(() => {
        if (flash?.success) {
            setMessageInfo(flash.success);
            setToast(true);
            formik.resetForm();
            reCaptchaRef.current.reset();
            flash.success = null;
        } else if (Object.keys(errors).length > 0) {
            setMessageInfo(getErrorMessage(errors));
            setToast(true);
        }
        setLoading(false);
    }, [errors, flash]);

    useEffect(() => {
        const hideToast = () => {
            isToast &&
                setTimeout(() => {
                    setToast(false);
                }, 4000);
        };
        hideToast();
    }, [isToast]);

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ClientLayout attributes={attributes}>
                <section className="max-w-screen-xl mx-auto md:px-8 px-6">
                    {isToast && (
                        <div
                            className="fixed p-4 bg-white shadow-md bottom-6 right-6 rounded-lg max-w-[40ch] 
                            items-center max-sm:left-6 flex gap-4"
                        >
                            <span className="p-2 bg-iapm-yellow rounded-full h-max">
                                <BellAlertIcon className="w-6 h-6 text-iapm-black" />
                            </span>
                            <span className="text-sm text-iapm-black ">
                                {messageInfo}
                            </span>
                        </div>
                    )}
                    <div className="my-14">
                        <H2>Contact Us</H2>
                        <Paragraph>
                            Have a question related to our company? Ask a
                            question through the contact below
                        </Paragraph>
                    </div>
                    <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 bg-white p-6 border border-gray-100 rounded-3xl mb-16 ">
                        <div className="space-y-6">
                            <H5>Contact information</H5>
                            {attributes?.contacts.map((values, i) => {
                                return (
                                    <a
                                        key={i}
                                        className="flex gap-4 items-center"
                                        target="_blank"
                                        href={`${
                                            contactLink[values.contact_type]
                                                .link
                                        }${values?.contact}`}
                                    >
                                        <span className="p-2 bg-iapm-yellow rounded-full h-max">
                                            {values.contact_type === "Email" ? (
                                                <EnvelopeIcon className="w-6 h-6 text-iapm-black" />
                                            ) : (
                                                <PhoneIcon className="w-6 h-6 text-iapm-black" />
                                            )}
                                        </span>

                                        <div>
                                            <span className="text-sm block text-iapm-dark-gray">
                                                {values?.contact_type || "-"}
                                            </span>
                                            <span className="text-iapm-black">
                                                {values?.contact || "-"}
                                            </span>
                                        </div>
                                    </a>
                                );
                            })}
                            <hr />
                            <H5>Address information</H5>
                            {attributes?.addresses.map((values, i) => {
                                return (
                                    <a
                                        href={`https://www.google.com/maps/search/${values?.address}`}
                                        target="_blank"
                                        className="flex gap-4 items-center"
                                        key={i}
                                    >
                                        <span className="p-2 bg-iapm-yellow rounded-full h-max">
                                            <MapPinIcon className="text-iapm-black w-6 h-6" />
                                        </span>
                                        <address className="text-iapm-black not-italic max-w-[40ch]">
                                            {values?.address || "-"}
                                        </address>
                                    </a>
                                );
                            })}
                        </div>

                        <div>
                            <H5>Send us a message</H5>
                            <form
                                onSubmit={formik.handleSubmit}
                                ref={contactFormRef}
                            >
                                <IInput
                                    inputLabel="Name"
                                    inputType="text"
                                    inputName="name"
                                    inputId="name"
                                    onChange={handleForm}
                                    defaultValue={formik.values.name || ""}
                                    errorMessage={formik.errors?.name}
                                />
                                <IInput
                                    inputLabel="Email"
                                    inputType="email"
                                    inputName="email"
                                    inputId="email"
                                    onChange={handleForm}
                                    defaultValue={formik.values.email || ""}
                                    errorMessage={formik.errors?.email}
                                />
                                <ITextarea
                                    textareaName="message"
                                    textareaLabel="Message"
                                    textareaId="message"
                                    onChange={handleForm}
                                    defaultValue={formik.values.message || ""}
                                    errorMessage={formik.errors?.message}
                                />
                                <div className="flex justify-end items-end gap-8 flex-col">
                                    <ReCAPTCHA
                                        sitekey={SITE_KEY}
                                        onChange={handleForm}
                                        ref={reCaptchaRef}
                                    />
                                    <IButton
                                        variant="primary"
                                        type="submit"
                                        isLoading={isLoading}
                                    >
                                        Send
                                    </IButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </ClientLayout>
        </>
    );
};

export default Contact;
