import React from "react";
import IInput from "../../../Components/Input/Input";
import ISelect from "../../../Components/Input/Select";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../../Helpers/validation-schema";
import IButton from "../../../Components/Button/Button";
import { router } from "@inertiajs/react";

const ContactForm = (props) => {
    const { value, closeModal, isUpdate } = props;
    const contactOptions = [
        { value: "Email", label: "Email" },
        { value: "Telephone", label: "Telephone" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "Telegram", label: "Telegram" },
    ];

    const handleSubmit = () => {
        isUpdate
            ? router.put(`/contacts/${value.id}`, formik.values)
            : router.post("/contacts", formik.values);

        closeModal();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            contact_type: value?.contact_type || "",
            contact: value?.contact || "",
        },
        onSubmit: handleSubmit,
        validationSchema: contactValidationSchema,
    });

    const handleForm = (e) => {
        const { name, value } = e;
        formik.setFieldValue(name, value);
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <ISelect
                    defaultValue={formik.values.contact_type || ""}
                    selectLabel="Contact Type"
                    selectName="contact_type"
                    selectId="contact_type"
                    options={contactOptions}
                    onChange={handleForm}
                    errorMessage={formik.errors.contact_type}
                />
                {formik.values.contact_type && (
                    <IInput
                        inputLabel={
                            formik.values.contact_type == "Telegram"
                                ? "Username"
                                : "Contact"
                        }
                        inputName="contact"
                        inputId="contact"
                        inputType="text"
                        onChange={handleForm}
                        defaultValue={formik.values.contact || ""}
                        errorMessage={formik.errors.contact}
                    />
                )}
                <div className="flex gap-6 justify-end items-center mt-8">
                    <IButton
                        type="button"
                        variant="link-border"
                        action={closeModal}
                    >
                        Cancel
                    </IButton>
                    <IButton type="submit" variant="primary">
                        Submit
                    </IButton>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
