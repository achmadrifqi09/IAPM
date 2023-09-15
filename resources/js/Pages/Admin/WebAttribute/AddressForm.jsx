import React from "react";
import ITextarea from "../../../Components/Input/Textarea";
import { useFormik } from "formik";
import { addressValidationSchema } from "../../../Helpers/validation-schema";
import IButton from "../../../Components/Button/Button";
import { router } from "@inertiajs/react";

const AddressForm = (props) => {
    const { value, closeModal, isUpdate } = props;

    const handleSubmit = () => {
        isUpdate
            ? router.put(`/addresses/${value.id}`, formik.values)
            : router.post("/addresses", formik.values);

        closeModal();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            address: value?.address || "",
        },
        onSubmit: handleSubmit,
        validationSchema: addressValidationSchema,
    });

    const handleForm = (e) => {
        const { name, value } = e;
        formik.setFieldValue(name, value);
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <ITextarea
                    textareaLabel="Address"
                    textareaName="address"
                    textareaId="address"
                    onChange={handleForm}
                    defaultValue={formik.values.address || ""}
                    errorMessage={formik.errors.address}
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

export default AddressForm;
