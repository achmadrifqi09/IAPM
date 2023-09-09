import React from "react";
import IInput from "../../../Components/Input/Input";
import ISelect from "../../../Components/Input/Select";
import { useFormik } from "formik";
import { Inertia } from "@inertiajs/inertia";
import { socialValidationSchema } from "../../../Helpers/validation-schema";
import IButton from "../../../Components/Button/Button";

const SocialForm = (props) => {
    const { value, closeModal, isUpdate } = props;
    const socialOptions = [
        { value: "Linkedin", label: "Linkedin" },
        { value: "Youtube", label: "Youtube" },
        { value: "Twitter", label: "Twitter" },
        { value: "Facebook", label: "Facebook" },
        { value: "Instagram", label: "Instagram" },
    ];

    const handleSubmit = () => {
        isUpdate
            ? Inertia.put(`/socials/${value.id}`, formik.values)
            : Inertia.post("/socials", formik.values);

        closeModal();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            social_type: value?.social_type || "",
            username: value?.username || "",
            link: value?.link || "",
        },
        onSubmit: handleSubmit,
        validationSchema: socialValidationSchema,
    });

    const handleForm = (e) => {
        const { name, value } = e;
        formik.setFieldValue(name, value);
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <ISelect
                    defaultValue={formik.values.social_type || ""}
                    selectLabel="Social Media Platform"
                    selectName="social_type"
                    selectId="social_type"
                    options={socialOptions}
                    onChange={handleForm}
                    errorMessage={formik.errors.social_type}
                />
                <IInput
                    inputLabel="Username"
                    inputName="username"
                    inputId="username"
                    inputType="text"
                    onChange={handleForm}
                    defaultValue={formik.values.username || ""}
                    errorMessage={formik.errors.username}
                />
                <IInput
                    inputLabel="Link"
                    inputName="link"
                    inputId="link"
                    inputType="text"
                    onChange={handleForm}
                    defaultValue={formik.values.link || ""}
                    errorMessage={formik.errors.link}
                />
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

export default SocialForm;
