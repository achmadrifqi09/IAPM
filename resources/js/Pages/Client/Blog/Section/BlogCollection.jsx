import React from "react";
import { H3, H4, Paragraph, Caption } from "../../../../Components/Text";
import { Link } from "@inertiajs/react";
import Badge from "../../../../Components/Badge";
import defaultImage from "../../../../../../public/assets/images/default-images/3dLogo.svg";

const BlogCollection = (props) => {
    const { posts, keyword } = props;
    const BASE_URL_ASSET = import.meta.env.VITE_BASE_URL_ASSET;

    return (
        <section className="w-full my-16">
            <div className=" max-w-screen-xl px-6 md:px-8 mx-auto grid gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {posts
                    ?.filter((result) => {
                        if (result === "") return result;
                        if (
                            result?.title
                                .toLowerCase()
                                .includes(keyword.toLowerCase())
                        )
                            return result;
                    })
                    .map((post, i) => {
                        return i === 0 ? (
                            <Link
                                className="grid grid-cols-2 gap-6 max-sm:col-span-1 max-md:col-span-2 md:col-span-3 max-md:grid-cols-1 mb-16"
                                href={`/blogs/${post?.slug}`}
                                key={i}
                            >
                                <img
                                    src={
                                        post?.thumbnail
                                            ? `${BASE_URL_ASSET}/${post?.thumbnail}`
                                            : defaultImage
                                    }
                                    alt={post?.title}
                                    className="rounded-lg aspect-video object-cover"
                                />
                                <div className="w-full space-y-6">
                                    <H3>{post?.title}</H3>
                                    <Paragraph>{post?.excerpt}</Paragraph>
                                    <div className="flex flex-wrap gap-2">
                                        {post?.post_categories.map(
                                            (category, i) => {
                                                return (
                                                    <Badge key={i}>
                                                        {category.category_name}
                                                    </Badge>
                                                );
                                            }
                                        )}
                                    </div>
                                    <Caption>{post?.published_at}</Caption>
                                </div>
                            </Link>
                        ) : (
                            <Link
                                href={`/blogs/${post?.slug}`}
                                className="space-y-4 block"
                                key={i}
                            >
                                <img
                                    src={
                                        post?.thumbnail
                                            ? `${BASE_URL_ASSET}/${post?.thumbnail}`
                                            : defaultImage
                                    }
                                    alt={post?.title}
                                    className="rounded-lg aspect-video object-cover"
                                />
                                <H4>{post?.title}</H4>
                                <Paragraph>{post?.excerpt}</Paragraph>
                                <div className="flex flex-wrap gap-2">
                                    {post?.post_categories.map(
                                        (category, i) => {
                                            return (
                                                <Badge key={i}>
                                                    {category.category_name}
                                                </Badge>
                                            );
                                        }
                                    )}
                                </div>
                                <Caption>
                                    Posted on : {post?.published_at}
                                </Caption>
                            </Link>
                        );
                    })}
            </div>
            {Object.keys(posts).length === 0 && (
                <div className="text-center max-w-screen-xl mx-auto p-6">
                    <span className="w-max px-8 py-4 bg-gray-100 rounded-2xl">
                        {" "}
                        No blog posts at this time
                    </span>
                </div>
            )}
        </section>
    );
};

export default BlogCollection;
