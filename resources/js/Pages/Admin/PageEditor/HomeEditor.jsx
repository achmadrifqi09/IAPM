import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/inertia-react";
import Home from "../../Client/Home";
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
import { toastSettings } from "../../../Helpers/sweetalert-config";
import getErrorMessage from "../../../Helpers/error-message";

const HomeEditor = (props) => {
    const { datas, assets, flash, errors } = props;
    const [isOpenEditor, setOpenEditor] = useState(false);
    const [options, setOptions] = useState({});

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
        const mapAsset = async () => {
            const result = await AssetMapping(assets);
            setOptions(result);
        };
        mapAsset();
    }, [assets]);

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
                <div className="flex items-center my-4 gap-4 p-4 border bg-white">
                    <EyeIcon className="w-6 h-6 " />
                    <H4>Editing Home Page</H4>
                </div>
                <div className="border">
                    <Home datas={formik.values} assets={assets} />
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
                                inputName="home-hero.title"
                                inputId="hemo-hero-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["home-hero"]?.title || ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Description"
                                textareaName="home-hero.description"
                                textareaId="home-hero-description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["home-hero"]?.description ||
                                    ""
                                }
                            />
                            <IInput
                                inputLabel="Button Label"
                                inputName="home-hero.button_label"
                                inputId="hemo-hero-button_label"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["home-hero"]?.button_label ||
                                    ""
                                }
                            />
                            <IInput
                                inputLabel="Button URL"
                                inputName="home-hero.button_url"
                                inputId="hemo-hero-button_url"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["home-hero"]?.button_url || ""
                                }
                            />
                            <ISelect
                                options={options.image || []}
                                selectLabel="Image"
                                selectName="home-hero.id_asset"
                                selectId="home-hero-id_asset"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["home-hero"]?.id_asset || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200 ">
                                <H6>Section 2</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="successful-project.title"
                                inputId="successful-project-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["successful-project"]
                                        ?.title || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200 ">
                                <H6>Section 3</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="capability.title"
                                inputId="capability-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["capability"]?.title || ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Description"
                                textareaName="capability.description"
                                textareaId="capability-description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["capability"]?.description ||
                                    ""
                                }
                            />
                            <ISelect
                                options={options.video || []}
                                selectLabel="Video"
                                selectName="capability.id_asset"
                                selectId="capability-id_asset"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["capability"]?.id_asset || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200 ">
                                <H6>Section 4</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="service-overview.title"
                                inputId="service-overview-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service-overview"]?.title ||
                                    ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Description"
                                textareaName="service-overview.description"
                                textareaId="service-overview-description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service-overview"]
                                        ?.description || ""
                                }
                            />
                            <IInput
                                inputLabel="Button Label"
                                inputName="service-overview.button_label"
                                inputId="service-overview-button_label"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service-overview"]
                                        ?.button_label || ""
                                }
                            />
                            <IInput
                                inputLabel="Button URL"
                                inputName="service-overview.button_url"
                                inputId="service-overview-button_url"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["service-overview"]
                                        ?.button_url || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200 ">
                                <H6>Section 5</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="testimonial.title"
                                inputId="testimonial-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["testimonial"]?.title || ""
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

export default HomeEditor;
