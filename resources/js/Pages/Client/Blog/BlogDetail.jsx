import React from "react";
import { Head } from "@inertiajs/inertia-react";
import ClientLayout from "../../../Layouts/client-layout";
import ReadingView from "./Section/ReadingView";

const BlogDetail = (props) => {
    return (
        <>
            <Head>
                <title>Lorem ipsum dolor sit.</title>
            </Head>
            <ClientLayout>
                <ReadingView />
            </ClientLayout>
        </>
    );
};

export default BlogDetail;
