import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router } from "@inertiajs/react";
import IInput from "../../../Components/Input/Input";
import RichEditor from "../../../Components/Input/RichEditor";
import ISelect from "../../../Components/Input/Select";
import InputMedia from "../../../Components/Input/InputMedia";
import ITextarea from "../../../Components/Input/Textarea";
import { H3, H4 } from "../../../Components/Text";
import { useFormik } from "formik";
import { postValidationSchema } from "../../../Helpers/validation-schema";
import IButton from "../../../Components/Button/Button";

const BlogForm = (props) => {
    const { post, isUpdate, categories, flash } = props;
    const [categoriesOption, setCategoriesOption] = useState([]);

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
            ? router.post(`/manage-blogs/${post.id}/form`, formik.values)
            : router.post(`/manage-blogs`, formik.values);
    };

    useEffect(() => {
        flash?.success &&
            setTimeout(() => {
                router.visit("/manage-blogs");
            }, 2000);
    }, [flash]);

    const getDefaultValueCategories = () => {
        let result = [];

        if (post?.post_categories) {
            categories.map((category) => {
                post?.post_categories.forEach((val) => {
                    if (val.id_category === category.id) {
                        result = [
                            ...result,
                            {
                                value: val?.id_category,
                                label: category.category_name,
                            },
                        ];
                    }
                });
            });
        }
        return result;
    };

    const formik = useFormik({
        initialValues: {
            title: post?.title || "",
            content: post?.content || "",
            slug: post?.slug || "",
            thumbnail: post?.thumbnail || "",
            status: post?.status || "",
            categories: getDefaultValueCategories(),
            meta_title: post?.meta_title || "",
            meta_description: post?.meta_description || "",
        },
        validationSchema: postValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (target) => {
        const { name, value, type } = target;

        if (name === "categories") {
            formik.setFieldValue(name, value);
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

    useEffect(() => {
        const result = categories.map((category) => {
            return {
                value: category.id,
                label: category.category_name,
            };
        });

        setCategoriesOption(result);
    }, [categories]);

    return (
        <>
            <Head>
                <title>Blog Form</title>
            </Head>
            <AdminLayout>
                {flash?.success && (
                    <div className="p-6 bg-white fixed right-6 bottom-6 shadow-xl rounded-xl border border-gray-100 z-30">
                        <span className="text-iapm-black ">
                            Please wait, redirect the page
                        </span>
                    </div>
                )}
                <section className="my-6">
                    <div className="bg-white p-6 rounded-3xl shadow space-y-8">
                        <H3>Blog From</H3>
                        <form
                            onSubmit={formik.handleSubmit}
                            className="grid grid-cols-3 gap-6 max-md:grid-cols-1"
                        >
                            <div className="md:col-span-2">
                                <H4>Main Form</H4>
                                <IInput
                                    inputLabel="Title*"
                                    inputName="title"
                                    inputType="text"
                                    inputId="title"
                                    onChange={handleForm}
                                    defaultValue={formik.values.title || ""}
                                    errorMessage={formik.errors.title}
                                />
                                <ISelect
                                    selectLabel="Status*"
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
                                    options={categoriesOption}
                                    onChange={handleForm}
                                    defaultValue={
                                        formik.values.categories || ""
                                    }
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
                            </div>
                            <div>
                                <H4>Additional Form</H4>
                                <IInput
                                    inputLabel="Meta Title"
                                    inputName="meta_title"
                                    inputType="text"
                                    inputId="meta_title"
                                    onChange={handleForm}
                                    defaultValue={formik.values.meta_title}
                                    errorMessage={formik.errors.meta_title}
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
                            </div>
                            <div className="flex justify-end mt-8 md:col-span-3">
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
