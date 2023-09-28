import React, { useState, useEffect } from "react";
import ITable from "../../../Components/Table";
import { MenuItem } from "@mui/material";
import Modal from "../../../Components/Modal";
import ITextarea from "../../../Components/Input/Textarea";
import InputMedia from "../../../Components/Input/InputMedia";
import IInput from "../../../Components/Input/Input";
import { useFormik } from "formik";
import IButton from "../../../Components/Button/Button";
import { historyDevelopmentValidationSchema } from "../../../Helpers/validation-schema";
import { router } from "@inertiajs/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { confirmSetttings } from "../../../Helpers/sweetalert-config";

const HistoryDevelopement = (props) => {
    const { datas } = props;
    const [isModalOpen, setModalOpen] = useState(false);

    const [updateProps, setUpdateProps] = useState({
        isUpdates: false,
        idUpdate: "",
    });

    const handleOpenModal = () => {
        !!isModalOpen === true && formik.resetForm();
        !!isModalOpen &&
            setUpdateProps({
                isUpdates: false,
                idUpdate: "",
            });
        setModalOpen((currentCondition) => !currentCondition);
    };

    const historyColumns = [
        {
            header: "Year",
            accessorKey: "year",
        },
        {
            header: "Description",
            accessorKey: "history_description",
        },
    ];
    const handleSubmit = () => {
        handleOpenModal();
        updateProps.isUpdates
            ? router.post(
                  `/history-development/${updateProps.idUpdate}`,
                  formik.values
              )
            : router.post(`/history-development`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            year: "",
            history_description: "",
            image: "",
        },
        validationSchema: historyDevelopmentValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        const { name, value, type } = target;
        formik.setFieldValue(name, type === "file" ? target.files[0] : value);
    };

    const handleUpdateAction = async (data) => {
        const { id, year, history_description, image } = data;
        setUpdateProps({
            isUpdates: true,
            idUpdate: id,
        });
        handleOpenModal();

        await formik.setFieldValue("year", year);
        await formik.setFieldValue("history_description", history_description);
        await formik.setFieldValue("image", image);
    };

    const hanldeDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this history development`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/history-development/${id}`);
            }
        });
    };
    return (
        <>
            {!!isModalOpen && (
                <Modal
                    title={
                        updateProps.isUpdates
                            ? "Update History Development"
                            : "Add History Development"
                    }
                    handleModal={handleOpenModal}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <IInput
                            inputLabel="Year"
                            inputName="year"
                            inputId="year"
                            inputType="number"
                            onChange={handleForm}
                            defaultValue={formik.values.year || ""}
                            errorMessage={formik.errors.year}
                        />
                        <ITextarea
                            textareaName="history_description"
                            textareaLabel="History Description"
                            defaultValue={
                                formik.values.history_description || ""
                            }
                            onChange={handleForm}
                            errorMessage={formik.errors.history_description}
                        />
                        <InputMedia
                            mediaLabel="Image"
                            mediaButtonLabel="Choose Image"
                            mediaName="image"
                            mediaId="image"
                            onChange={handleForm}
                            errorMessage={formik.errors.image}
                            defaultValue={formik.values.image || ""}
                            mediaType="image"
                        />

                        <div className="flex justify-end my-6">
                            <IButton type="submit" variant="primary">
                                Submit
                            </IButton>
                        </div>
                    </form>
                </Modal>
            )}
            <section className="rounded-3xl bg-white p-6">
                <IButton action={handleOpenModal} variant="primary">
                    <PlusIcon className="w-6 h-6 text-iapm-black" />
                    Add History Data
                </IButton>
                <ITable
                    columns={historyColumns}
                    datas={datas}
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
        </>
    );
};

export default HistoryDevelopement;
