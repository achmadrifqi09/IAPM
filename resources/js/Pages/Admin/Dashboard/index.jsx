import React from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import MessageList from "./section/MessageList";

const Dashboard = (props) => {
    const { lastedMessages } = props;

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <AdminLayout>
                <div className="grid grid-cols-2 my-8">
                    <MessageList messages={lastedMessages} />
                </div>
            </AdminLayout>
        </>
    );
};

export default Dashboard;
