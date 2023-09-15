import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { H3 } from "../../../Components/Text";
import AdminLayout from "../../../Layouts/admin-layout";
import { PlusIcon } from "@heroicons/react/24/outline";
import IButton from "../../../Components/Button/Button";
import getErrorMessage from "../../../Helpers/error-message";
import ITable from "../../../Components/Table";
import {
    toastSettings,
    confirmSetttings,
} from "../../../Helpers/sweetalert-config";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import { useFormik } from "formik";
import { testimonialValidationSchema } from "../../../Helpers/validation-schema";
import { MenuItem } from "@mui/material";
import Modal from "../../../Components/Modal";
import Swal from "sweetalert2";

const Testimonial = (props) => {
    const { testimonials, errors, flash } = props;
    const [isModalOpen, setModalOpen] = useState(false);
    const [updateProps, setUpdateProps] = useState({
        isUpdate: false,
        idUpdate: "",
    });

    const testimonialColumn = [
        {
            header: "Name",
            accessorKey: "name",
        },
        {
            header: "Position / Employment",
            accessorKey: "position",
        },
        {
            header: "Quote",
            accessorKey: "quote",
        },
    ];

    const handleOpenModal = () => {
        !!isModalOpen === true && formik.resetForm();
        !!isModalOpen &&
            setUpdateProps({
                isUpdates: false,
                idUpdate: "",
            });
        setModalOpen((currentCondition) => !currentCondition);
    };

    const handleSubmit = () => {
        handleOpenModal();

        updateProps.isUpdate
            ? router.put(
                  `/testimonials/${updateProps.idUpdate}`,
                  formik.values
              )
            : router.post("/testimonials", formik.values);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            quote: "",
        },
        validationSchema: testimonialValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleUpdateAction = async (testimonial) => {
        const { id, name, position, quote } = testimonial;

        setUpdateProps({
            isUpdate: true,
            idUpdate: id,
        });
        handleOpenModal();

        await formik.setFieldValue("position", position);
        await formik.setFieldValue("name", name);
        await formik.setFieldValue("quote", quote);
    };

    const handleForm = (target) => {
        const { name, value } = target;

        formik.setFieldValue(name, value);
    };

    const hanldeDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this testimonial`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/testimonials/${id}`);
            }
        });
    };

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
                <title>Testimonial</title>
            </Head>

            <AdminLayout>
                {!!isModalOpen && (
                    <Modal
                        title={
                            updateProps.isUpdate
                                ? "Update Testimonial"
                                : "Add Testimonial "
                        }
                        handleModal={handleOpenModal}
                    >
                        <form onSubmit={formik.handleSubmit}>
                            <IInput
                                inputLabel="Name (Name of the Testimonial Giver)"
                                inputName="name"
                                inputId="name"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={formik.values.name || ""}
                                errorMessage={formik.errors.name}
                            />
                            <IInput
                                inputLabel="Positon (Postion / Employment)"
                                inputName="position"
                                inputId="position"
                                inputType="text"
                                onChange={handleForm}
                                defaultValue={formik.values.position || ""}
                                errorMessage={formik.errors.position}
                            />
                            <ITextarea
                                textareaLabel="Quote"
                                textareaName="quote"
                                textareaId="quote"
                                onChange={handleForm}
                                defaultValue={formik.values.quote || ""}
                                errorMessage={formik.errors.quote}
                            />
                            <div className="flex justify-end my-6">
                                <IButton type="submit" variant="primary">
                                    Submit
                                </IButton>
                            </div>
                        </form>
                    </Modal>
                )}
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Testimonial</H3>
                    <IButton
                        variant="primary"
                        isLink={false}
                        action={handleOpenModal}
                    >
                        <PlusIcon className="w-6 h-6 text-iapm-black" />
                        Add Testimonial
                    </IButton>

                    <ITable
                        columns={testimonialColumn}
                        datas={testimonials}
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

export default Testimonial;
