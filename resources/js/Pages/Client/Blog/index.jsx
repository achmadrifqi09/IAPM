import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import BlogCollection from "./Section/BlogCollection";
import BlogHeader from "./Section/BlogHeader";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <ClientLayout>
                <BlogHeader />
                <BlogCollection />
            </ClientLayout>
        </>
    );
};

export default Blog;
