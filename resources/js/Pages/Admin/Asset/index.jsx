import React, { useState, useEffect } from "react";
import Modal from "../../../Components/Modal";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router, usePage } from "@inertiajs/react";
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
import { PlusIcon } from "@heroicons/react/24/outline";
import IInput from "../../../Components/Input/Input";
import InputMedia from "../../../Components/Input/InputMedia";
import { useFormik } from "formik";
import { assetValidationSchema } from "../../../Helpers/validation-schema";
import ISelect from "../../../Components/Input/Select";

const Asset = (props) => {
    const { assets } = props;
    const { errors, flash } = usePage().props;
    const [isModalOpen, setModalOpen] = useState(false);

    const [updateProps, setUpdateProps] = useState({
        isUpdates: false,
        idUpdate: "",
    });

    const assetColumn = [
        {
            header: "Asset Name",
            accessorKey: "asset_name",
        },
        {
            header: "Asset Type",
            accessorKey: "asset_type",
        },
        {
            header: "File",
            accessorKey: "file",
            Cell: ({ cell }) => {
                return (
                    <a
                        href={`/media-preview?url=${cell.getValue()}`}
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
            ? router.post(`/web-assets/${updateProps.idUpdate}`, formik.values)
            : router.post(`/web-assets`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            asset_name: "",
            asset_type: "",
            file: "",
        },
        validationSchema: assetValidationSchema,
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

    const hanldeDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this web asset`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/web-assets/${id}`);
            }
        });
    };

    const handleUpdateAction = async (assetData) => {
        const { id, asset_name, asset_type, file } = assetData;

        setUpdateProps({
            isUpdates: true,
            idUpdate: id,
        });
        handleOpenModal();

        await formik.setFieldValue("asset_type", asset_type);
        await formik.setFieldValue("asset_name", asset_name);
        await formik.setFieldValue("file", file);
    };

    useEffect(() => {
        formik.setFieldValue("file", "");
    }, [formik.values.asset_type]);

    useEffect(() => {
        if (flash?.success || Object.keys(errors).length > 0) {
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
                <title>Web Asset</title>
            </Head>
            <AdminLayout errors={errors} flash={flash}>
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
                                inputName="asset_name"
                                inputId="asset_name"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={formik.values.asset_name || ""}
                                errorMessage={formik.errors.asset_name}
                            />
                            <ISelect
                                defaultValue={formik.values.asset_type || ""}
                                selectLabel="Asset File Type"
                                selectName="asset_type"
                                selectId="asset_type"
                                options={assetOptions}
                                onChange={handleForm}
                                errorMessage={formik.errors.asset_type}
                            />
                            {formik.values.asset_type && (
                                <InputMedia
                                    mediaLabel="File"
                                    mediaButtonLabel="Choose File"
                                    mediaName="file"
                                    mediaId="file"
                                    onChange={handleForm}
                                    errorMessage={formik.errors.file}
                                    defaultValue={formik.values.file || ""}
                                    mediaType={formik.values.asset_type.toLowerCase()}
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
                        datas={assets}
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
                                    hanldeDeleteAction(row.original.id);
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
