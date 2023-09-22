import React, { useEffect, useState } from "react";
import { Head, router } from "@inertiajs/react";
import { H2, H3, Paragraph } from "../../../Components/Text";
import {
    EyeIcon,
    EyeSlashIcon,
    ChevronRightIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import IButton from "../../../Components/Button/Button";
import { useFormik } from "formik";
import { signInValidationSchema } from "../../../Helpers/validation-schema";
import Terrain from "../../../../../public/assets/images/terrain.svg";
import getErrorMessage from "../../../Helpers/error-message";

const SignIn = (props) => {
    const { errors } = props;
    const [isShowPassword, setShowPassword] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const [message, setMessage] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [submitLimiter, setSubmitLimiter] = useState({
        time: 60,
        isActive: false,
    });

    const handleShowPassword = () => {
        setShowPassword((currentCondition) => !currentCondition);
    };

    const handleSubmit = () => {
        setLoading(true);
        router.post("/login", formik.values);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInValidationSchema,
        onSubmit: handleSubmit,
    });

    const handleForm = (e) => {
        if (invalid && !message.includes("exceeds limit")) {
            setInvalid(false);
            setMessage(null);
        }
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setLoading(false);
            const errorMessage = getErrorMessage(errors);
            setMessage(errorMessage);
            setInvalid(true);
            errorMessage.includes("exceeds limit") &&
                setSubmitLimiter({ ...submitLimiter, isActive: true });
        }
    }, [errors]);

    const activatedLimiter = (value) =>
        setSubmitLimiter({ isActive: true, time: value });

    useEffect(() => {
        if (submitLimiter.isActive) {
            if (submitLimiter.time === 0) {
                localStorage.removeItem("time_limiter");
                setMessage(null);
                setInvalid(false);
                setSubmitLimiter({ isActive: false, time: 60 });
                return;
            }
            const interval = setInterval(() => {
                setSubmitLimiter({
                    ...submitLimiter,
                    time: submitLimiter.time - 1,
                });
                localStorage.setItem("time_limiter", submitLimiter.time);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [submitLimiter]);

    useEffect(() => {
        const localLimiter = localStorage.getItem("time_limiter");
        if (localLimiter !== null) {
            activatedLimiter(localLimiter);
            setMessage("Request exceeds limit, try again in");
            setInvalid(true);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="bg-white font-poppins">
                <div className="object-cover bg-no-repeat ">
                    <section className="max-w-screen-xl h-screen px-6 md:px-8 grid grid-cols-2 max-md:grid-cols-1 items-center mx-auto gap-6">
                        <div className=" max-md:hidden p-6">
                            <img
                                src={Terrain}
                                alt="login pettern image"
                                className="h-1/2"
                            />
                        </div>
                        <div className="w-full mx-auto p-6 max-md:p-0 ">
                            <span className="bg-iapm-yellow block w-max h-max p-4 rounded-full mb-6">
                                <ShieldCheckIcon className="w-12 h-12" />
                            </span>
                            <div className="my-4">
                                <H2> Login</H2>
                                <Paragraph>
                                    Enter your registered email and password
                                </Paragraph>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="py-4">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 text-iapm-dark-gray"
                                    >
                                        Email
                                    </label>
                                    <input
                                        autoComplete="off"
                                        onChange={handleForm}
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={formik.values.email || ""}
                                        className="bg-gray-100 rounded-lg w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow disabled:text-gray-400"
                                    />
                                    {formik.errors.email && (
                                        <span className="text-sm text-iapm-red">
                                            {formik.errors.email}
                                        </span>
                                    )}
                                </div>
                                <div className="py-4 ">
                                    <label
                                        htmlFor="password"
                                        className="mb-2 text-iapm-dark-gray"
                                    >
                                        Password
                                    </label>
                                    <div className="bg-gray-100 flex rounded-lg w-full relative">
                                        <input
                                            autoComplete="off"
                                            onChange={handleForm}
                                            id="password"
                                            name="password"
                                            value={formik.values.password || ""}
                                            type={
                                                isShowPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className="rounded-lg bg-transparent w-full px-4 py-3 font-poppins focus:border focus:border-iapm-yellow disabled:text-gray-400"
                                        />
                                        <button
                                            className="px-4 py-3 absolute right-0"
                                            type="button"
                                            onClick={handleShowPassword}
                                        >
                                            {!isShowPassword ? (
                                                <EyeSlashIcon className="w-6 h-6 text-iapm-dark-gray" />
                                            ) : (
                                                <EyeIcon className="w-6 h-6 text-iapm-dark-gray" />
                                            )}
                                        </button>
                                    </div>
                                    {formik.errors.password && (
                                        <span className="text-sm text-iapm-red">
                                            {formik.errors.password}
                                        </span>
                                    )}
                                </div>
                                {invalid && (
                                    <span className="text-sm text-iapm-red">
                                        {message}{" "}
                                        {submitLimiter.isActive &&
                                            submitLimiter.time}
                                    </span>
                                )}

                                <div className="flex justify-end mt-6">
                                    <IButton
                                        variant="primary"
                                        type="submit"
                                        isLoading={isLoading}
                                        isDisable={submitLimiter.isActive}
                                    >
                                        Login
                                        <ChevronRightIcon className="w-6 h-6" />
                                    </IButton>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
                <span className="absolute w-max bottom-2 m-auto left-0 right-0 font-poppins text-iapm-dark-gray">
                    IAPM Elinksolution Indonesia 2023
                </span>
            </main>
        </>
    );
};

export default SignIn;
