import React, { useEffect, useState } from "react";
import { Head, router } from "@inertiajs/react";
import { H2, Paragraph } from "../../../Components/Text";
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
    const [isDisable, setDisable] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((currentCondition) => !currentCondition);
    };

    const handleSubmit = () => {
        setLoading(true);
        setDisable(true);
        router.post("/login", formik.values);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
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
            errorMessage.includes("exceeds limit")
                ? setDisable(true)
                : setDisable(false);
            setInvalid(true);
        }
    }, [errors]);

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
                                loading="lazy"
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
                                <div className="pt-4 ">
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
                                <div className="py-4 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        className="h-4 w-4"
                                        onChange={handleForm}
                                    />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                                {invalid && (
                                    <span className="text-sm text-iapm-red">
                                        {message}
                                    </span>
                                )}

                                <div className="flex justify-end mt-6">
                                    <IButton
                                        variant="primary"
                                        type="submit"
                                        isLoading={isLoading}
                                        isDisable={isDisable}
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
