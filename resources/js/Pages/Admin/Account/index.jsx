import React, { useState, useEffect } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, router } from "@inertiajs/react";
import IButton from "../../../Components/Button/Button";
import { H3 } from "../../../Components/Text";
import Swal from "sweetalert2";
import getErrorMessage from "../../../Helpers/error-message";
import { toastSettings } from "../../../Helpers/sweetalert-config";
import IInput from "../../../Components/Input/Input";
import { updateAccountValidationSchema } from "../../../Helpers/validation-schema";
import { useFormik } from "formik";

const Account = (props) => {
    const { user, errors, flash } = props;
    const [isUpdate, setUpdate] = useState(false);
    const [enableOtp, setEnableOtp] = useState(false);
    const [isSendOtp, setSendOtp] = useState(false);
    const [timer, setTimer] = useState(60);

    const handleEnableUpdate = () => {
        setUpdate((currentValue) => !currentValue);
    };

    const handleOtpRequest = (id) => {
        router.post("/otp", { user_id: id });
    };

    const handleForm = (target) => {
        const { name, value } = target;
        if (name == "email" || name.includes("password")) {
            setEnableOtp(true);
        }
        formik.setFieldValue(name, value);
    };

    const handleSubmit = (id) => {
        router.post(`/account/${user?.id}`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            name: user?.name || "",
            email: user?.email || "",
            old_password: "",
            password: "",
            password_confirmation: "",
            on_time_password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: updateAccountValidationSchema,
    });

    useEffect(() => {
        if (flash?.success) {
            Swal.fire({
                ...toastSettings,
                icon: "success",
                title: flash.success,
            });
            localStorage.getItem("timer") && localStorage.removeItem("timer");
            if (flash?.success.includes("OTP has been send")) {
                setSendOtp(true);
            } else {
                formik.setFieldValue("on_time_password", "");
                formik.setFieldValue("password_confirmation", "");
                formik.setFieldValue("password", "");
                formik.setFieldValue("old_password", "");
                setSendOtp(false);
                setEnableOtp(false);
                setUpdate(false);
                setTimer(60);
            }
        } else if (Object.keys(errors).length > 0) {
            Swal.fire({
                ...toastSettings,
                icon: "error",
                title: getErrorMessage(errors),
            });
        }
    }, [flash, errors]);

    const saveTimer = () => {
        localStorage.setItem("otp-timer", timer);
    };

    useEffect(() => {
        if (isSendOtp) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer((prev) => prev - 1);
                    saveTimer();
                }, 1000);
            } else {
                localStorage.removeItem("otp-timer");
                setSendOtp(false);
                setTimer(60);
            }
        }
    }, [timer, isSendOtp]);

    useEffect(() => {
        if (localStorage.getItem("otp-timer")) {
            setTimer(localStorage.getItem("otp-timer"));
            setSendOtp(true);
            setEnableOtp(true);
            setUpdate(true);
        }

        window.onbeforeunload = () => {
            localStorage.removeItem("otp-timer");
        };
    }, []);

    return (
        <>
            <Head>
                <title>Account</title>
            </Head>
            <AdminLayout>
                <section className="max-w-screen-sm flex flex-col justify-center items-center min-h-[90vh]  mx-auto">
                    <div className="bg-white shadow rounded-3xl p-6 w-full">
                        <div className="flex justify-between flex-wrap items-center">
                            <H3>Account Infromation</H3>
                            <IButton
                                type="button"
                                variant="normal-link"
                                action={handleEnableUpdate}
                            >
                                {isUpdate
                                    ? "Disable Updating"
                                    : "Enable Updating"}
                            </IButton>
                        </div>
                        {isUpdate && (
                            <span className="text-sm text-iapm-dark-gray">
                                The update does not have to complete all fields,
                                except those related to credentials
                            </span>
                        )}
                        <div className="flex items-start gap-6 ">
                            <div className="w-full">
                                <form onSubmit={formik.handleSubmit}>
                                    <IInput
                                        inputLabel="Account Name"
                                        inputName="name"
                                        inputType="text"
                                        defaultValue={formik.values.name}
                                        disable={!isUpdate}
                                        onChange={handleForm}
                                        errorMessage={formik.errors.name}
                                    />
                                    <IInput
                                        inputLabel="Email"
                                        inputName="email"
                                        inputType="email"
                                        defaultValue={formik.values.email}
                                        disable={!isUpdate}
                                        onChange={handleForm}
                                        errorMessage={formik.errors.email}
                                    />
                                    <IInput
                                        inputLabel="Old Password"
                                        inputName="old_password"
                                        inputType="password"
                                        disable={!isUpdate}
                                        defaultValue={
                                            formik.values.old_password
                                        }
                                        onChange={handleForm}
                                        errorMessage={
                                            formik.errors.old_password
                                        }
                                    />
                                    <IInput
                                        inputLabel="Password"
                                        inputName="password"
                                        inputType="password"
                                        disable={!isUpdate}
                                        defaultValue={formik.values.password}
                                        onChange={handleForm}
                                        errorMessage={formik.errors.password}
                                    />
                                    <IInput
                                        inputLabel="Confirm Password"
                                        inputName="password_confirmation"
                                        inputType="password"
                                        disable={!isUpdate}
                                        defaultValue={
                                            formik.values.password_confirmation
                                        }
                                        onChange={handleForm}
                                        errorMessage={
                                            formik.errors.password_confirmation
                                        }
                                    />

                                    {enableOtp && (
                                        <div>
                                            <IInput
                                                inputLabel="One-Time Password"
                                                inputName="on_time_password"
                                                inputType="text"
                                                disable={!isUpdate}
                                                defaultValue={
                                                    formik.values
                                                        .on_time_password
                                                }
                                                onChange={handleForm}
                                                errorMessage={
                                                    formik.errors
                                                        .on_time_password
                                                }
                                            />
                                            <div className="flex justify-end">
                                                {isUpdate &&
                                                    (isSendOtp ? (
                                                        <span className="text-sm text-iapm-dark-gray">
                                                            Please wait {timer}{" "}
                                                            seconds to resend
                                                        </span>
                                                    ) : (
                                                        <IButton
                                                            type="button"
                                                            variant="normal-link"
                                                            action={() =>
                                                                handleOtpRequest(
                                                                    user?.id
                                                                )
                                                            }
                                                        >
                                                            Send OTP
                                                        </IButton>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                    {isUpdate && (
                                        <IButton
                                            variant="primary"
                                            type="submit"
                                        >
                                            Submit
                                        </IButton>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </AdminLayout>
        </>
    );
};

export default Account;
