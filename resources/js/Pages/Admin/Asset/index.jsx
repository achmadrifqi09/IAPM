import React, { useState, useEffect } from "react";
import Modal from "../../../Components/Modal";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import IButton from "../../../Components/Button/Button";
import ITable from "../../../Components/Table";
import { H3 } from "../../../Components/Text";
import Swal from "sweetalert2";
import getErrorMessage from "../../../Helpers/error-message";
import {
    toastSettings,
    confirmSetttings,
} from "../../../Helpers/sweetalert-config";
import { MenuItem } from "@mui/material";
import { Inertia } from "@inertiajs/inertia";
import { PlusIcon } from "@heroicons/react/24/outline";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import InputMedia from "../../../Components/Input/InputMedia";
import { useFormik } from "formik";
import { fileValidationSchema } from "../../../Helpers/validation-schema";
import ISelect from "../../../Components/Input/Select";

const Asset = (props) => {
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    const { files, errors, flash } = props;
    const [isModalOpen, setModalOpen] = useState(false);

    const [updateProps, setUpdateProps] = useState({
        isUpdates: false,
        idUpdate: "",
    });

    const assetColumn = [
        {
            header: "File Name",
            accessorKey: "file_name",
        },
        {
            header: "File Type",
            accessorKey: "file_type",
        },
        {
            header: "File",
            accessorKey: "file",
            Cell: ({ cell }) => {
                return (
                    <a
                        href={`${baseUrlAsset}/${cell.getValue()}`}
                        target="_blank"
                        className="text-amber-700"
                    >
                        View
                    </a>
                );
            },
        },
    ];

    const assetOptions = [
        { value: "Video", label: "Video" },
        { value: "Image", label: "Image" },
    ];

    const handleSubmit = () => {
        handleOpenModal();
        updateProps.isUpdates
            ? Inertia.post(`/web-assets/${updateProps.idUpdate}`, formik.values)
            : Inertia.post(`/web-assets`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            file_name: "",
            file_type: "",
            file: "",
        },
        validationSchema: fileValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        const { name, value, type } = target;
        formik.setFieldValue(name, type === "file" ? target.files[0] : value);
    };

    const handleOpenModal = () => {
        !!isModalOpen === true && formik.resetForm();
        !!isModalOpen &&
            setUpdateProps({
                isUpdates: false,
                idUpdate: "",
            });
        setModalOpen((currentCondition) => !currentCondition);
    };

    const handleDeleteAsset = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this web asset`,
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/web-assets/${id}`);
            }
        });
    };

    const handleUpdateAction = async (assetData) => {
        const { id, file_name, file_type, file } = assetData;

        setUpdateProps({
            isUpdates: true,
            idUpdate: id,
        });
        handleOpenModal();

        await formik.setFieldValue("file_type", file_type);
        await formik.setFieldValue("file_name", file_name);
        await formik.setFieldValue("file", file);
    };

    useEffect(() => {
        formik.setFieldValue("file", "");
    }, [formik.values.file_type]);

    useEffect(() => {
        if (flash?.success) {
            Swal.fire({
                ...toastSettings,
                icon: "success",
                title: flash.success,
            });
            !!isModalOpen && handleOpenModal();
        } else if (Object.keys(errors).length > 0) {
            Swal.fire({
                ...toastSettings,
                icon: "error",
                title: getErrorMessage(errors),
            });
            !!isModalOpen && handleOpenModal();
        }
        setUpdateProps({
            isUpdates: false,
            idUpdate: "",
        });
    }, [errors, flash]);
    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            <AdminLayout>
                {!!isModalOpen && (
                    <Modal
                        title={
                            updateProps.isUpdates
                                ? "Update Web Asset"
                                : "Add Web Asset"
                        }
                        handleModal={handleOpenModal}
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <IInput
                                inputLabel="Asset Filename"
                                inputName="file_name"
                                inputId="file_name"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={formik.values.file_name || ""}
                                errorMessage={formik.errors.file_name}
                            />
                            <ISelect
                                defaultValue={formik.values.file_type || ""}
                                selectLabel="Asset File Type"
                                selectName="file_type"
                                selectId="file_type"
                                options={assetOptions}
                                onChange={handleForm}
                                errorMessage={formik.errors.file_type}
                            />
                            {formik.values.file_type && (
                                <InputMedia
                                    mediaLabel="File"
                                    mediaButtonLabel="Choose File"
                                    mediaName="file"
                                    mediaId="file"
                                    onChange={handleForm}
                                    errorMessage={formik.errors.file}
                                    defaultValue={formik.values.file || ""}
                                    mediaType={formik.values.file_type.toLowerCase()}
                                />
                            )}
                            <div className="flex justify-end my-6">
                                <IButton type="submit" variant="primary">
                                    Submit
                                </IButton>
                            </div>
                        </form>
                    </Modal>
                )}
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Web Asset</H3>
                    <div className="justify-between flex-wrap">
                        <IButton
                            variant="primary"
                            isLink={false}
                            action={handleOpenModal}
                        >
                            <PlusIcon className="w-6 h-6 text-iapm-black" />
                            Add Asset
                        </IButton>
                    </div>
                    <ITable
                        columns={assetColumn}
                        datas={files}
                        action={({ row, closeMenu }) => [
                            <MenuItem
                                key="detail"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    handleUpdateAction(row.original);
                                    closeMenu();
                                }}
                            >
                                Update
                            </MenuItem>,
                            <MenuItem
                                key="edit"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    handleDeleteAsset(row.original.id);
                                    closeMenu();
                                }}
                            >
                                Delete
                            </MenuItem>,
                        ]}
                    />
                </section>
            </AdminLayout>
        </>
    );
};

export default Asset;
