import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import BlogCollection from "./Section/BlogCollection";
import SearchInput from "../../../Components/Input/SearchInput";
import { H2 } from "../../../Components/Text";

const Blog = (props) => {
    const { posts, attributes } = props;
    const [keyword, setKeyword] = useState("");

    const handleChangeKeyword = (value) => {
        setTimeout(() => {
            setKeyword(value.value);
        }, 50);
    };
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <ClientLayout attributes={attributes}>
                <header className="pt-16 pb-6 ">
                    <div className=" max-w-screen-xl mx-auto px-6 md:px-8 space-y-6 ">
                        <H2>Our Blogs</H2>
                        <form>
                            <SearchInput
                                inputName="blog-search"
                                inputId="blogSearch"
                                onChange={handleChangeKeyword}
                            />
                        </form>
                    </div>
                </header>
                <BlogCollection posts={posts} keyword={keyword} />
            </ClientLayout>
        </>
    );
};

export default Blog;
