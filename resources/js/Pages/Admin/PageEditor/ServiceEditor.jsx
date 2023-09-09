import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/inertia-react";
import Service from "../../Client/Service";
import { EyeIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { H6, H4 } from "../../../Components/Text";
import SidebarEditor from "../../../Components/Sidebar/SidebarEditor";
import FloatingButton from "../../../Components/Button/FloatingButton";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import ISelect from "../../../Components/Input/Select";
import { useFormik } from "formik";
import IButton from "../../../Components/Button/Button";
import { Inertia } from "@inertiajs/inertia";
import AssetMapping from "../../../Helpers/asset-mapping";
import Swal from "sweetalert2";
import getErrorMessage from "../../../Helpers/error-message";
import { toastSettings } from "../../../Helpers/sweetalert-config";

const ServiceEditor = (props) => {
    const { datas, flash, errors } = props;
    const [isOpenEditor, setOpenEditor] = useState(false);

    const handleOpenEditor = () => {
        setOpenEditor((isOpen) => !isOpen);
    };

    const handleSubmit = () => {
        Inertia.put("/pages", formik.values);
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

    useEffect(() => {
        if (flash?.success) {
            Swal.fire({
                ...toastSettings,
                icon: "success",
                title: flash.success,
            });
        } else if (Object.keys(errors).length > 0) {
            Swal.fire({
                ...toastSettings,
                icon: "error",
                title: getErrorMessage(errors),
            });
        }
    }, [errors, flash]);

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
                    <Service datas={formik.values} />
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
