import React, { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/admin-layout";
import { H3 } from "../../../Components/Text";
import ITable from "../../../Components/Table";
import { MenuItem } from "@mui/material";
import IButton from "../../../Components/Button/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../../../Components/Modal";
import IInput from "../../../Components/Input/Input";
import InputMedia from "../../../Components/Input/InputMedia";
import { useFormik } from "formik";
import { clientValidationSchema } from "../../../Helpers/validation-schema";
import Swal from "sweetalert2";

import { confirmSetttings } from "../../../Helpers/sweetalert-config";

const Client = (props) => {
    const { clients, flash, errors } = props;
    const [updateProps, setUpdateProps] = useState({
        isUpdates: false,
        idUpdate: "",
    });
    const [isOpenModal, setOpenModal] = useState(false);
    const baseUrlAsset = import.meta.env.VITE_BASE_URL_ASSET;

    const clientColumns = [
        {
            header: " Logo",
            accessorKey: "image",
            Cell: ({ cell }) => {
                return (
                    <img
                        src={`${baseUrlAsset}/${cell.getValue()}`}
                        alt="Logo of client"
                        className="w-8 h-8 object-cover object-center"
                        loading="lazy"
                    />
                );
            },
        },
        {
            header: "Client Name",
            accessorKey: "client_name",
        },
    ];

    const handleSubmit = () => {
        updateProps.isUpdates
            ? router.post(`/clients/${updateProps.idUpdate}`, formik.values)
            : router.post("/clients", formik.values);
        handleOpenModal();
    };

    const handleForm = (target) => {
        const { name, value, type } = target;
        formik.setFieldValue(name, type === "file" ? target.files[0] : value);
    };

    const formik = useFormik({
        initialValues: {
            client_name: "",
            image: "",
        },
        validationSchema: clientValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleOpenModal = () => {
        !!isOpenModal === true && formik.resetForm();
        !!isOpenModal &&
            setUpdateProps({
                isUpdates: false,
                idUpdate: "",
            });
        setOpenModal((currentValue) => !currentValue);
    };

    const hanldeDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this client`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/clients/${id}`);
            }
        });
    };

    const handleUpdateAction = async (clientData) => {
        const { id, client_name, image } = clientData;

        setUpdateProps({
            isUpdates: true,
            idUpdate: id,
        });
        handleOpenModal();

        await formik.setFieldValue("client_name", client_name);
        await formik.setFieldValue("image", image);
    };

    useEffect(() => {
        if (flash?.success || Object.keys(errors).length > 0) {
            !!isOpenModal && handleOpenModal();
        }
        setUpdateProps({
            isUpdates: false,
            idUpdate: "",
        });
    }, [errors, flash]);

    return (
        <>
            <Head>
                <title>Client</title>
            </Head>
            <AdminLayout>
                {isOpenModal && (
                    <Modal
                        title={
                            updateProps.isUpdates
                                ? "Update client data"
                                : "Add client data"
                        }
                        handleModal={handleOpenModal}
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <IInput
                                inputLabel="Client Name"
                                inputName="client_name"
                                inputId="client_name"
                                inputType="text"
                                onChange={handleForm}
                                errorMessage={formik.errors.client_name}
                                defaultValue={formik.values.client_name || ""}
                            />
                            <InputMedia
                                mediaLabel="Logo"
                                mediaButtonLabel="Choose Image"
                                mediaName="image"
                                mediaId="image"
                                onChange={handleForm}
                                errorMessage={formik.errors.image}
                                defaultValue={formik.values.image || ""}
                                mediaType="image"
                            />
                            <div className="flex justify-end">
                                <IButton type="submit" variant="primary">
                                    Submit
                                </IButton>
                            </div>
                        </form>
                    </Modal>
                )}
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Client</H3>
                    <div className="justify-between flex-wrap">
                        <IButton
                            variant="primary"
                            isLink={false}
                            action={handleOpenModal}
                        >
                            <PlusIcon className="w-6 h-6 text-iapm-black" />
                            Add Client
                        </IButton>
                    </div>
                    <ITable
                        columns={clientColumns}
                        datas={clients}
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

export default Client;
