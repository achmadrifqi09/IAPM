import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "../../../Layouts/client-layout";
import ReadingView from "./Section/ReadingView";
import defaultImage from "../../../../../public/assets/images/default-images/3dLogo.svg";

const BlogDetail = (props) => {
    const { post, lastedPosts, attributes } = props;
    const [currentUrl, setCurrentUrl] = useState("");
    const BASE_URL_ASSET = import.meta.env.VITE_BASE_URL_ASSET;

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <Head>
                <title>{post?.title}</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content={post?.meta_description} />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post?.meta_title} />
                <meta
                    property="og:description"
                    content={post?.meta_description}
                />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:site_name" content="PT IAPM Elinksolution" />
                <meta
                    property="article:published_time"
                    content={post?.published_at}
                />
                <meta
                    property="og:image"
                    content={
                        `${BASE_URL_ASSET}/${post?.thumbnail}` || defaultImage
                    }
                />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="853" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@iapmelinksolution" />
            </Head>
            <ClientLayout attributes={attributes}>
                <ReadingView post={post} lastedPosts={lastedPosts} />
            </ClientLayout>
        </>
    );
};

export default BlogDetail;
