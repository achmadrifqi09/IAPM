import React from "react";
import ClientLayout from "../../../Layouts/client-layout";
import ReadingView from "./Section/ReadingView";
import Meta from "../../../Components/Meta";

const BlogDetail = (props) => {
    const { post, lastedPosts, attributes, meta } = props;

    return (
        <>
            <Meta metas={meta} image={post?.thumbnail} type="article" />
            <ClientLayout attributes={attributes}>
                <ReadingView post={post} lastedPosts={lastedPosts} />
            </ClientLayout>
        </>
    );
};

export default BlogDetail;
