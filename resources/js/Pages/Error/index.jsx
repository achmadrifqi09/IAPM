import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { H1, Paragraph } from "../../Components/Text";
import ErrorImage from "../../../../public/assets/images/error.png";

const ErrorPage = (props) => {
    const { status, message } = props;

    const backPage = () => {
        window.history.back();
    };

    return (
        <>
            <Head>
                <title>404 Page not found</title>
            </Head>
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins ">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 flex h-screen justify-center items-center flex-col gap-12">
                    <img
                        src={ErrorImage}
                        alt="Error image"
                        className=" max-w-sm"
                    />
                    <div className="text-center">
                        <span className="text-8xl font-semibold font-poppins block">
                            {status || 404}
                        </span>
                        <span className="block mt-2 text-iapm-dark-gray">
                            {message || "Oops sorry, page not found"}
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ErrorPage;
