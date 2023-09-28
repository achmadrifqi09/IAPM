import React from "react";
import { Head } from "@inertiajs/react";

const MediaPreview = (props) => {
    const { media, type } = props;
    const baseUrl = import.meta.env.VITE_BASE_URL_ASSET;
    return (
        <>
            <Head>
                <title>Media Previw</title>
            </Head>
            <main className=" max-w-screen-xl px-6 md:px-8 mx-auto">
                <section className="flex h-screen justify-center items-center ">
                    {type === "Image" && (
                        <img
                            src={`${baseUrl}/${media.url}`}
                            alt="image media preview"
                            loading="lazy"
                        />
                    )}
                    {type === "Video" && (
                        <video className="w-full aspect-video" controls>
                            <source
                                src={`${baseUrl}/${media.url}`}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag
                        </video>
                    )}
                </section>
            </main>
        </>
    );
};

export default MediaPreview;
