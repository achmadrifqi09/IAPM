import React, { useState } from "react";
import ListItem from "../../../Components/List/ListItem";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import IButton from "../../../Components/Button/Button";
import { H6 } from "../../../Components/Text";
import { Link } from "@inertiajs/inertia-react";
import IInput from "../../../Components/Input/Input";
import Modal from "../../../Components/Modal";
import { categoryValidationSchema } from "../../../Helpers/validation-schema";
import { useFormik } from "formik";

const BlogCategory = (props) => {
    const [isOpenModal, setOpenModal] = useState(false);
    const [updateProps, setUpdateProps] = useState({
        isUpdate: false,
        idUpdate: "",
    });

    const handleSubmit = () => {};

    const formik = useFormik({
        initialValues: {
            category_name: "",
        },
        validationSchema: categoryValidationSchema,
    });

    const handelForm = (target) => {
        const { name, value } = target;
        formik.setFieldValue(name, value);
    };

    const handelOpenModal = () => {
        setOpenModal((currentCondition) => !currentCondition);
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
                <li className="p-6 bg-gray-100 rounded-xl flex justify-between items-center flex-wrap">
                    <H6>Project Manager</H6>
                    <div className="flex gap-4 max-sm:mt-4">
                        <Link
                            href=""
                            className="p-2 rounded-xl border border-iapm-black"
                        >
                            <PencilIcon className="w-6 h-6 text-center" />
                        </Link>
                        <button className="p-2 rounded-xl border border-iapm-black">
                            <TrashIcon className="w-6 h-6 text-center" />
                        </button>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default BlogCategory;
