import React from "react";
import { Head, router } from "@inertiajs/react";
import DefaultImage from "../../../../public/assets/images/default-images/iapm-logo.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Meta = (props) => {
    const { metas, image, type } = props;
    const appUrl = import.meta.env.VITE_APP_URL;
    const assetUrl = import.meta.env.VITE_BASE_URL_ASSET;

    return (
        <Head>
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content={type} />
            <meta name="author" content="PT IAPM Elinksolution" />

            <title>{metas?.meta_title}</title>
            <meta name="description" content={metas?.meta_description} />
            <meta name="keywords" content={metas?.keywords} />
            <meta property="og:url" content={metas?.url} />
            <meta property="og:title" content={metas?.meta_title} />
            <meta property="og:description" content={metas?.meta_description} />
            <meta
                property="og:image"
                content={
                    image ? `${assetUrl}/${image}` : `${appUrl}${DefaultImage}`
                }
            />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={appUrl} />
            <meta property="twitter:url" content={metas?.url} />
            <meta name="twitter:title" content={metas?.meta_title} />
            <meta
                name="twitter:description"
                content={metas?.meta_description}
            />
            <meta
                name="twitter:image"
                content={
                    image ? `${assetUrl}/${image}` : `${appUrl}${DefaultImage}`
                }
            />
        </Head>
    );
};

export default Meta;
