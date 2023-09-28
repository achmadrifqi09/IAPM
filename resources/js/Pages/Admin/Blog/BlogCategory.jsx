import React, { useState, useEffect } from "react";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import IButton from "../../../Components/Button/Button";
import { H6 } from "../../../Components/Text";
import IInput from "../../../Components/Input/Input";
import Modal from "../../../Components/Modal";
import { categoryValidationSchema } from "../../../Helpers/validation-schema";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { confirmSetttings } from "../../../Helpers/sweetalert-config";
import { router } from "@inertiajs/react";

const BlogCategory = (props) => {
    const { categories } = props;
    const [isOpenModal, setOpenModal] = useState(false);
    const [updateProps, setUpdateProps] = useState({
        isUpdate: false,
        idUpdate: "",
    });

    const handleSubmit = () => {
        handelOpenModal();
        updateProps.isUpdate
            ? router.put(`/categories/${updateProps.idUpdate}`, formik.values)
            : router.post(`/categories`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            category_name: "",
        },
        validationSchema: categoryValidationSchema,
        onSubmit: handleSubmit,
    });

    const handelForm = (target) => {
        const { name, value } = target;
        formik.setFieldValue(name, value);
    };

    const handelOpenModal = () => {
        !!isOpenModal === true && formik.resetForm();
        !!isOpenModal &&
            setUpdateProps({
                isUpdate: false,
                idUpdate: "",
            });
        setOpenModal((currentCondition) => !currentCondition);
    };

    const handleUpdateAction = async (category) => {
        const { id, category_name } = category;
        setUpdateProps({
            isUpdate: true,
            idUpdate: id,
        });
        handelOpenModal();
        await formik.setFieldValue("category_name", category_name);
    };

    const handleDeleteAction = (id) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Delete this category`,
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/categories/${id}`);
            }
        });
    };

    return (
        <>
            {!!isOpenModal && (
                <Modal
                    title={
                        updateProps.isUpdate
                            ? "Update Category"
                            : "Add Category"
                    }
                    handleModal={handelOpenModal}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <IInput
                            inputLabel="Category Name"
                            inputName="category_name"
                            inputId="category_name"
                            onChange={handelForm}
                            defaultValue={formik.values.category_name || ""}
                        />
                        <div className="flex justify-end">
                            <IButton type="submit" variant="primary">
                                Save
                            </IButton>
                        </div>
                    </form>
                </Modal>
            )}
            <IButton variant="primary" action={handelOpenModal}>
                <PlusIcon className="w-6 h-6" />
                Add Category
            </IButton>
            <ul className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                {Object.keys(categories).length > 0 ? (
                    categories.map((category, i) => {
                        return (
                            <li
                                className="p-6 bg-gray-100 rounded-xl flex justify-between items-center gap-4 max-md:flex-col"
                                key={i}
                            >
                                <H6>{category.category_name}</H6>
                                <div className="flex gap-4 max-sm:mt-4">
                                    <button
                                        className="p-2 rounded-xl"
                                        onClick={() =>
                                            handleUpdateAction(category)
                                        }
                                    >
                                        <PencilIcon className="w-6 h-6 text-center" />
                                    </button>
                                    <button
                                        className="p-2 rounded-xl"
                                        onClick={() =>
                                            handleDeleteAction(category.id)
                                        }
                                    >
                                        <TrashIcon className="w-6 h-6 text-center" />
                                    </button>
                                </div>
                            </li>
                        );
                    })
                ) : (
                    <li className="p-6 bg-gray-100 rounded-xl flex justify-center items-center flex-wrap sm:col-span-2 text-center">
                        No Data to display
                    </li>
                )}
            </ul>
        </>
    );
};

export default BlogCategory;
