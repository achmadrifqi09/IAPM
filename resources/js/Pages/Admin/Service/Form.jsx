import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router } from "@inertiajs/react";
import IButton from "../../../Components/Button/Button";
import { H3 } from "../../../Components/Text";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import InputMedia from "../../../Components/Input/InputMedia";
import RichEditor from "../../../Components/Input/RichEditor";
import { useFormik } from "formik";
import { serviceValidationSchema } from "../../../Helpers/validation-schema";

const ServiceForm = (props) => {
    const { mode, service, flash } = props;

    const handleSubmit = useCallback(() => {
        if (mode === "update") {
            router.post(`/service-products/${service.id}/form`, formik.values);
        } else if (mode === "create") {
            router.post("/service-products", formik.values);
        }
    });

    useEffect(() => {
        flash?.success &&
            setTimeout(() => {
                router.visit("/service-products");
            }, 2000);
    }, [flash]);

    const formik = useFormik({
        initialValues: {
            service_name: service?.service_name || "",
            short_description: service?.short_description || "",
            image: service?.image || "",
            description: service?.description || "",
        },
        validationSchema: serviceValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        const { name, value, type } = target;
        formik.setFieldValue(name, type === "file" ? target.files[0] : value);
    };

    return (
        <>
            <Head>
                <title>Service Form</title>
            </Head>
            <AdminLayout>
                {flash?.success && (
                    <div className="p-6 bg-white fixed right-6 bottom-6 shadow-xl rounded-xl border border-gray-100 z-30">
                        <span className="text-iapm-black ">
                            Please wait, redirect the page
                        </span>
                    </div>
                )}
                <section className="space-y-6 mt-8">
                    <div className="bg-white shadow rounded-3xl p-6 border border-gray-100 my-6">
                        {mode === "update" ? (
                            <H3>Update Service</H3>
                        ) : (
                            <H3>Add Service</H3>
                        )}
                        <form onSubmit={formik.handleSubmit}>
                            <IInput
                                inputLabel="Service Name"
                                inputName="service_name"
                                inputId="service_name"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={formik.values.service_name || ""}
                                errorMessage={formik.errors.service_name}
                            />
                            <ITextarea
                                textareaLabel="Short Description"
                                textareaName="short_description"
                                textareaId="short_description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values.short_description || ""
                                }
                                errorMessage={formik.errors.short_description}
                            />
                            <InputMedia
                                mediaLabel="Image"
                                mediaId="image"
                                mediaName="image"
                                mediaType="image"
                                mediaButtonLabel="Choose Image"
                                onChange={handleForm}
                                defaultValue={formik.values.image || ""}
                                errorMessage={formik.errors.image}
                            />
                            <RichEditor
                                onChange={handleForm}
                                editorLabel="Description"
                                editorName="description"
                                defaultValue={formik.values.description || ""}
                                errorMessage={formik.errors.description}
                            />
                            <div className="flex justify-end my-6">
                                <IButton
                                    type="submit"
                                    variant="primary"
                                    action={handleSubmit}
                                >
                                    Submit
                                </IButton>
                            </div>
                        </form>
                    </div>
                </section>
            </AdminLayout>
        </>
    );
};

export default ServiceForm;
