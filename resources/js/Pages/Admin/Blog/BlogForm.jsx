import React from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/inertia-react";
import IInput from "../../../Components/Input/Input";
import RichEditor from "../../../Components/Input/RichEditor";
import ISelect from "../../../Components/Input/Select";
import InputMedia from "../../../Components/Input/InputMedia";
import ITextarea from "../../../Components/Input/Textarea";
import { H3 } from "../../../Components/Text";
import { useFormik } from "formik";
import { postValidationSchema } from "../../../Helpers/validation-schema";
import IButton from "../../../Components/Button/Button";
import { Inertia } from "@inertiajs/inertia";

const BlogForm = (props) => {
    const { post, isUpdate, errors } = props;

    const blogStatusOptions = [
        {
            label: "Published",
            value: "Published",
        },
        {
            label: "Draft",
            value: "Draft",
        },
    ];

    const handleSubmit = () => {
        isUpdate === true
            ? Inertia.post(`/manage-blogs/${post.id}`, formik.values)
            : Inertia.post(`/manage-blogs`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            content: "",
            slug: "",
            thumbnail: "",
            status: "",
            categories: [],
        },
        validationSchema: postValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        const { name, value, type } = target;
        if (name === "categories") {
            formik.setFieldValue(name, [...formik.values.categories, value]);
        } else {
            formik.setFieldValue(
                name,
                type === "file" ? target.files[0] : value
            );
        }
        name === "title" &&
            formik.setFieldValue(
                "slug",
                value
                    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
                    .split(" ")
                    .join("-")
            );
    };

    return (
        <>
            <Head>
                <title>Blog Form</title>
            </Head>
            <AdminLayout>
                <section className="my-6">
                    <div className="bg-white p-6 rounded-3xl shadow space-y-8">
                        <H3>Blog From</H3>
                        <form onSubmit={formik.handleSubmit}>
                            <IInput
                                inputLabel="Title"
                                inputName="title"
                                inputType="text"
                                inputId="title"
                                onChange={handleForm}
                                defaultValue={formik.values.title || ""}
                                errorMessage={formik.errors.title}
                            />
                            <ISelect
                                selectLabel="Status"
                                selectName="status"
                                selectId="status"
                                options={blogStatusOptions}
                                onChange={handleForm}
                                defaultValue={formik.values.status || ""}
                                errorMessage={formik.errors.status}
                            />
                            <ISelect
                                isMulti={true}
                                selectLabel="Category"
                                selectName="categories"
                                selectId="categories"
                                options={blogStatusOptions}
                                onChange={handleForm}
                                defaultValue={formik.values.categories || ""}
                                errorMessage={formik.errors.categories}
                            />
                            <IInput
                                inputLabel="Slug"
                                inputName="slug"
                                inputType="text"
                                inputId="slug"
                                disable={true}
                                onChange={handleForm}
                                defaultValue={formik.values.slug}
                                errorMessage={formik.errors.slug}
                            />
                            <ITextarea
                                textareaLabel="Meta Description (Optional)"
                                textareaName="meta_description"
                                textareaId="meta_description"
                                onChange={handleForm}
                                defaultValue={
                                    formik.values.meta_description || ""
                                }
                            />
                            <InputMedia
                                mediaLabel="Thumbnail"
                                mediaButtonLabel="Choose thumbnail"
                                mediaName="thumbnail"
                                mediaId="thumbnail"
                                mediaType="image"
                                onChange={handleForm}
                                errorMessage={formik.errors.thumbnail}
                                defaultValue={formik.values.thumbnail || ""}
                            />
                            <RichEditor
                                editorLabel="Content"
                                editorName="content"
                                onChange={handleForm}
                                defaultValue={formik.values.content || ""}
                                errorMessage={formik.errors.content}
                            />
                            <div className="flex justify-end mt-8">
                                <IButton variant="primary" type="submit">
                                    Save
                                </IButton>
                            </div>
                        </form>
                    </div>
                </section>
            </AdminLayout>
        </>
    );
};

export default BlogForm;
