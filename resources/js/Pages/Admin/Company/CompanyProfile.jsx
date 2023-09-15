import React, { useEffect, useState } from "react";
import { H4, Paragraph } from "../../../Components/Text";
import {
    PencilIcon,
    EyeIcon,
    DocumentTextIcon,
    RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Modal from "../../../Components/Modal";
import ITextarea from "../../../Components/Input/Textarea";
import { useFormik } from "formik";
import IButton from "../../../Components/Button/Button";
import {
    companyVisionSchema,
    companyDescriptionSchema,
    companyMissionSchema,
} from "../../../Helpers/validation-schema";
import { router } from "@inertiajs/react";

const CompanyProfile = (props) => {
    const { datas } = props;
    const [isModalOpen, setModalOpen] = useState(false);
    const [initialValues, setInitialValues] = useState({});
    const [validationSchema, setValidationSchema] = useState();

    const handleSubmit = () => {
        router.put("/company", formik.values);
        handelModalOpen();
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    const handelModalOpen = (initialValue = {}) => {
        isModalOpen ? setInitialValues({}) : setInitialValues(initialValue);

        setModalOpen((currentCondition) => !currentCondition);
    };

    const handleForm = (target) => {
        const { name, value } = target;
        formik.setFieldValue(name, value);
    };

    useEffect(() => {
        switch (String(Object.keys(initialValues)[0])) {
            case "description":
                setValidationSchema(companyDescriptionSchema);
                break;
            case "vision":
                setValidationSchema(companyVisionSchema);
                break;
            case "mission":
                setValidationSchema(companyMissionSchema);
                break;
        }
    }, [Object.keys(initialValues)]);

    return (
        <>
            {!!isModalOpen && (
                <Modal
                    title={`Update ${Object.keys(formik.values)[0]}`}
                    handleModal={handelModalOpen}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <ITextarea
                            textareaName={Object.keys(initialValues)[0]}
                            textareaLabel={Object.keys(initialValues)[0]}
                            defaultValue={
                                formik.values[Object.keys(formik.values)[0]]
                            }
                            onChange={handleForm}
                            errorMessage={
                                formik.errors[Object.keys(initialValues)[0]]
                            }
                        />
                        <div className="flex justify-end">
                            <IButton variant="primary" type="submit">
                                Save
                            </IButton>
                        </div>
                    </form>
                </Modal>
            )}
            <section className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="p-6 bg-white rounded-3xl space-y-6 shadow">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 bg-iapm-yellow rounded-full">
                                <DocumentTextIcon className="w-6 h-6" />
                            </span>
                            <H4>Company Description</H4>
                        </div>
                        <button
                            className="p-2"
                            onClick={() =>
                                handelModalOpen({
                                    description: datas?.description,
                                })
                            }
                        >
                            <PencilIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-2xl">
                        <Paragraph>
                            {datas?.description || "No data to display"}
                        </Paragraph>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl space-y-6 shadow">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 bg-iapm-yellow rounded-full">
                                <EyeIcon className="w-6 h-6" />
                            </span>
                            <H4>Vision</H4>
                        </div>
                        <button
                            className="p-2"
                            onClick={() =>
                                handelModalOpen({
                                    vision: datas?.vision,
                                })
                            }
                        >
                            <PencilIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-2xl">
                        <Paragraph>
                            {datas?.vision || "No data to display"}
                        </Paragraph>
                    </div>
                </div>

                <div className="p-6 bg-white rounded-3xl space-y-6 shadow">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <span className="p-2 bg-iapm-yellow rounded-full">
                                <RocketLaunchIcon className="w-6 h-6" />
                            </span>
                            <H4>Mission</H4>
                        </div>
                        <button
                            className="p-2"
                            onClick={() =>
                                handelModalOpen({
                                    mission: datas?.mission,
                                })
                            }
                        >
                            <PencilIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-2xl">
                        <Paragraph>
                            {datas?.mission || "No data to display"}
                        </Paragraph>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyProfile;
