import React, { useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import Home from "../../Client/Home";
import { EyeIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { H4 } from "../../../Components/Text";
import SidebarEditor from "../../../Components/Sidebar/SidebarEditor";
import FloatingButton from "../.././../Components/Button/FloatingButton";
import IInput from "../../../Components/Input/Input";
import ITextarea from "../../../Components/Input/Textarea";
import ISelect from "../../../Components/Input/Select";

const HomeEditor = () => {
    const [isOpenEditor, setOpenEditor] = useState(false);

    const handleOpenEditor = () => {
        setOpenEditor((isOpen) => !isOpen);
    };

    const handleChange = (e) => {
        console.log(e.value);
    };

    return (
        <>
            <Head>
                <title>Page Editor</title>
            </Head>
            <AdminLayout>
                <div className="flex items-center my-4 gap-4 p-4 border">
                    <EyeIcon className="w-6 h-6 " />
                    <H4>Editing Home Page</H4>
                </div>
                <div className="border">
                    <Home />
                </div>
                <FloatingButton action={handleOpenEditor}>
                    {isOpenEditor ? (
                        <XMarkIcon className="w-6 h-6 text-iapm-black" />
                    ) : (
                        <PencilIcon className="w-6 h-6 text-iapm-black" />
                    )}
                </FloatingButton>
                <SidebarEditor isOpenEditor={isOpenEditor}>
                    <IInput
                        inputLabel="Title"
                        inputName="title"
                        inputId="title"
                        inputType="text"
                        onChange={handleChange}
                    />
                    <ITextarea
                        textareaLabel="Description"
                        textareaName="description"
                        textareaId="description"
                        textareaType="description"
                        onChange={handleChange}
                    />
                    <ISelect
                        selectLabel="Image 1"
                        selectName="image-left"
                        selectId="image-left"
                        onChange={handleChange}
                    />
                    <ISelect
                        selectLabel="Image 2"
                        selectName="image-right"
                        selectId="image-right"
                        onChange={handleChange}
                    />
                </SidebarEditor>
            </AdminLayout>
        </>
    );
};

export default HomeEditor;
