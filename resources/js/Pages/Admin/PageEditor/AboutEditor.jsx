import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router } from "@inertiajs/react";
import About from "../../Client/About";
import { EyeIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { H6, H4 } from "../../../Components/Text";
import SidebarEditor from "../../../Components/Sidebar/SidebarEditor";
import FloatingButton from "../../../Components/Button/FloatingButton";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import ISelect from "../../../Components/Input/Select";
import { useFormik } from "formik";
import IButton from "../../../Components/Button/Button";
import AssetMapping from "../../../Helpers/asset-mapping";

const AboutEditor = (props) => {
    const { datas, assets, company, histories } = props;
    const [isOpenEditor, setOpenEditor] = useState(false);
    const [options, setOptions] = useState({});

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

    useEffect(() => {
        const mapAsset = async () => {
            const result = await AssetMapping(assets);
            setOptions(result);
        };
        mapAsset();
    }, [assets]);

    return (
        <>
            <Head>
                <title>Page Editor</title>
            </Head>
            <AdminLayout>
                <div className="flex items-center my-4 gap-4 p-4 border bg-white">
                    <EyeIcon className="w-6 h-6 " />
                    <H4>Editing About Page</H4>
                </div>
                <div className="border">
                    <About
                        datas={formik.values}
                        assets={assets}
                        company={company}
                        histories={histories}
                    />
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
                                inputName="about.title"
                                inputId="about-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["about"]?.title || ""
                                }
                            />
                            <ISelect
                                options={options.image || []}
                                selectLabel="Image"
                                selectName="about.id_asset"
                                selectId="about-id_asset"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["about"]?.id_asset || ""
                                }
                            />
                        </div>
                        <div className="my-6">
                            <div className="py-4 border-b border-b-gray-200">
                                <H6>Section 2</H6>
                            </div>
                            <IInput
                                inputLabel="Title"
                                inputName="history-of-development.title"
                                inputId="history-of-development-title"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["history-of-development"]
                                        ?.title || ""
                                }
                            />
                            <ITextarea
                                textareaLabel="Description"
                                textareaName="history-of-development.description"
                                textareaId="history-of-development-description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values["history-of-development"]
                                        ?.description || ""
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

export default AboutEditor;
