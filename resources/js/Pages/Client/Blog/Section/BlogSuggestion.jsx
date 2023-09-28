import React from "react";
import defaultImage from "../../../../../../public/assets/images/default-images/iapm-logo.jpg";
import { Caption, H4, Paragraph } from "../../../../Components/Text";
import { Link } from "@inertiajs/react";
import { CalendarIcon } from "@heroicons/react/24/outline";

const BlogSuggestion = (props) => {
    const { posts } = props;
    const BASE_URL_ASSET = import.meta.env.VITE_BASE_URL_ASSET;
    return (
        <section className="w-full">
            <div className="space-y-6 ">
                <H4>Recent Posts</H4>
                <div
                    className="grid gap-6 lg:grid-cols-1 max-lg:grid-cols-4
                md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
                >
                    {Object.keys(posts).length > 0 ? (
                        posts?.map((post, i) => {
                            return (
                                <Link
                                    className="flex gap-2 items-center "
                                    key={i}
                                    href={`/blogs/${post.slug}`}
                                >
                                    <img
                                        src={
                                            post?.thumbnail
                                                ? `${BASE_URL_ASSET}/${post?.thumbnail}`
                                                : defaultImage
                                        }
                                        alt={post?.title}
                                        className="rounded-lg max-w-[100px] object-cover aspect-square"
                                    />
                                    <div className="space-y-2">
                                        <Paragraph>
                                            {post?.title.length > 40
                                                ? `${post?.title.substring(
                                                      0,
                                                      40
                                                  )}...`
                                                : post?.title}
                                        </Paragraph>
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="w-5 h-5 text-iapm-dark-gray" />
                                            <Caption>
                                                {post?.published_at}
                                            </Caption>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <div
                            className="p-4 bg-gray-100 rounded-lg text-center lg:col-span-4
                        md:col-span-3 max-md:col-span-2 max-sm:col-span-1"
                        >
                            No other posts
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogSuggestion;
