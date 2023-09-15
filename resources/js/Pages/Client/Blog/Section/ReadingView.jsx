import React, { useEffect, useState } from "react";
import { H2, H5, Caption } from "../../../../Components/Text";
import { CalendarIcon, EyeIcon } from "@heroicons/react/24/outline";
import BlogSuggestion from "./BlogSuggestion";
import SocialSharing from "../../../../Components/SocialSharing";

const ReadingView = (props) => {
    const { post, lastedPosts } = props;
    const [currentUrl, setCurrentUrl] = useState("");
    const BASE_URL_ASSET = import.meta.env.VITE_BASE_URL_ASSET;

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <article className="max-w-screen-xl mx-auto mb-32 px-6 md:px-8 pt-12">
            <div className="grid grid-cols-4 max-lg:grid-cols-3 gap-6 md:gap-8">
                <div className="md:col-span-1 max-sm:col-span-full">
                    <div className="space-y-4 lg:sticky lg:top-16">
                        <H5>Share this post </H5>
                        <div className="flex space-x-4 ">
                            <SocialSharing
                                url={currentUrl}
                                sharingMedia="facebook"
                                qoute="test"
                                hashtag="123"
                            />
                            <SocialSharing
                                url={currentUrl}
                                sharingMedia="twitter"
                            />
                            <SocialSharing
                                url={currentUrl}
                                sharingMedia="whatsapp"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 max-lg:col-span-2 max-md:col-span-full space-y-6">
                    <H2>{post?.title}</H2>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-iapm-dark-gray" />
                            <Caption>{post?.published_at}</Caption>
                        </div>
                        <div className="flex items-center gap-2">
                            <EyeIcon className="w-5 h-5 text-iapm-dark-gray" />
                            <Caption>{post?.visits?.score || 0}</Caption>
                        </div>
                    </div>
                    {!!post?.thumbnail && (
                        <img
                            src={`${BASE_URL_ASSET}/${post?.thumbnail}`}
                            alt={post?.title}
                            className="rounded-xl aspect-video object-cover"
                        />
                    )}

                    <div
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                        className="space-y-4 min-h-screen"
                    />
                </div>
                <div className="col-span-1 max-lg:col-span-full ">
                    <div className="lg:sticky lg:top-16">
                        <BlogSuggestion posts={lastedPosts} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ReadingView;
