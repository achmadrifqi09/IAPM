import React from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import MessageList from "./section/MessageList";
import PostList from "./section/PostList";
import BasicInfo from "./section/BasicInfo";

const Dashboard = (props) => {
    const { lastedMessages, lastedPosts, serviceCount, blogCount, emailCount } =
        props;

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <AdminLayout>
                <div className="grid grid-cols-2 my-8 gap-6 max-md:grid-cols-1">
                    <BasicInfo
                        serviceCount={serviceCount}
                        blogCount={blogCount}
                        emailCount={emailCount}
                    />
                    <MessageList messages={lastedMessages} />
                    <PostList posts={lastedPosts} />
                </div>
            </AdminLayout>
        </>
    );
};

export default Dashboard;
