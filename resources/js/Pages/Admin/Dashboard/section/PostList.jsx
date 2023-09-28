import React from "react";
import ListContainer from "../../../../Components/List/ListContainer";
import ListItem from "../../../../Components/List/ListItem";
import { Paragraph, H5, Caption } from "../../../../Components/Text";
import IButton from "../../../../Components/Button/Button";
import DefaultImage from "../../../../../../public/assets/images/default-images/iapm-logo.jpg";

const PostList = (props) => {
    const { posts } = props;
    const urlAsset = import.meta.env.VITE_BASE_URL_ASSET;
    const postUrl = import.meta.env.VITE_BLOG_URL;

    return (
        <section className="p-6 bg-white shadow rounded-3xl">
            <div className="flex justify-between items-center">
                <div className="mb-6">
                    <H5>Lasted Post</H5>
                    <Paragraph>This new post was recently created</Paragraph>
                </div>
                <IButton isLink={true} url="/manage-blogs">
                    View All
                </IButton>
            </div>
            <ListContainer>
                {posts?.map((post, i) => {
                    return (
                        <ListItem key={i}>
                            <div className="flex gap-4 items-center">
                                <img
                                    src={
                                        post.thumbnail
                                            ? `${urlAsset}/${post.thumbnail}`
                                            : DefaultImage
                                    }
                                    alt={`image of ${post?.title}`}
                                    className="w-20 h-20 object-cover object-center rounded-lg"
                                    loading="lazy"
                                />
                                <div>
                                    <a
                                        href={
                                            post.status === "Published"
                                                ? `${postUrl}/${post?.slug}`
                                                : "/manage-blogs"
                                        }
                                        target="_blank"
                                        className="block"
                                    >
                                        {post?.title}
                                    </a>
                                    <Caption>{post.status}</Caption>
                                </div>
                            </div>
                        </ListItem>
                    );
                })}
                {Object.keys(posts).length === 0 && (
                    <ListItem isEmpty={true}>
                        <span>No data displayed</span>
                    </ListItem>
                )}
            </ListContainer>
        </section>
    );
};

export default PostList;
