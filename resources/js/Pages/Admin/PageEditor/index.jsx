import React from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";

const PageEditor = () => {
    return (
        <>
            <Head>
                <title>Page Editor</title>
            </Head>
            <AdminLayout>
                <section>
                    <h1>PageEditor</h1>
                </section>
            </AdminLayout>
        </>
    );
};

export default PageEditor;
