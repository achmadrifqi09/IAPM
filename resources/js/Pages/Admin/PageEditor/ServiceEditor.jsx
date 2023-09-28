import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router } from "@inertiajs/react";
import Service from "../../Client/Service";
import { EyeIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { H6, H4 } from "../../../Components/Text";
import SidebarEditor from "../../../Components/Sidebar/SidebarEditor";
import FloatingButton from "../../../Components/Button/FloatingButton";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import { useFormik } from "formik";
import IButton from "../../../Components/Button/Button";

const ServiceEditor = (props) => {
    const { datas, services } = props;
    const [isOpenEditor, setOpenEditor] = useState(false);

    const handleOpenEditor = () => {
        setOpenEditor((isOpen) => !isOpen);
    };

    const handleSubmit = () => {
        router.put("/pages", formik.values);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: datas,
        onSubmit: handleSubmit,
    });

    const handleForm = (props) => {
        const { name, value, type } = props;
        formik.setFieldValue(name, type === "file" ? target.files[0] : value);
    };

    return (
        <>
            <Head>
                <title>Page Editor</title>
            </Head>
            <AdminLayout>
                <div className="flex items-center my-4 gap-4 p-4 border bg-white rounded">
                    <EyeIcon className="w-6 h-6 " />
                    <H4>Editing Service Page</H4>
                </div>
                <div className="border">
                    <Service datas={formik.values} services={services} />
                </div>
                <FloatingButton action={handleOpenEditor}>
                    {isOpenEditor ? (
                        <XMarkIcon className="w-6 h-6 text-iapm-black" />
                    ) : (
                        <PencilIcon className="w-6 h-6 text-iapm-black" />
                    )}
                </FloatingButton>
                <SidebarEditor isOpenEditor={isOpenEditor}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200 ">
                                <H6>Meta Data</H6>
                            </div>
                            <IInput
                                inputLabel="Meta Title"
                                inputName="meta.meta_title"
                                inputId="meta.meta_title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values?.meta?.meta_title || ""
                                }
                            />
                            <IInput
                                inputLabel="Meta Keywords"
                                inputName="meta.keywords"
                                inputId="meta.keywords"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values?.meta?.keywords || ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Meta Description"
                                textareaName="meta.meta_description"
                                textareaId="meta.meta_description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values?.meta?.meta_description || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200">
                                <H6>Section 1</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="service.title"
                                inputId="service-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service"]?.title || ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Description"
                                textareaName="service.description"
                                textareaId="service-description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service"]?.description || ""
                                }
                            />
                        </div>

                        <div className="flex justify-end my-6">
                            <IButton type="submit" variant="primary">
                                Save
                            </IButton>
                        </div>
                    </form>
                </SidebarEditor>
            </AdminLayout>
        </>
    );
};

export default ServiceEditor;
