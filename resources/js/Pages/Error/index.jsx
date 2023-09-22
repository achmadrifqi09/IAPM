import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { H1, Paragraph } from "../../Components/Text";
import IButton from "../../Components/Button/Button";

const ErrorPage = (props) => {
    const backPage = () => {
        window.history.back();
    };

    return (
        <>
            <Head>
                <title>404 Page not found</title>
            </Head>
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins flex flex-col items-center justify-center">
                <div className="my-8 text-center">
                    <H1>404</H1>
                    <Paragraph>
                        Sorry, we can't find the page we searched for
                    </Paragraph>
                </div>
                <IButton variant="primary" action={backPage}>
                    Go Back
                </IButton>
            </main>
        </>
    );
};

export default ErrorPage;
