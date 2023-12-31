import React, { useState, useEffect } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head } from "@inertiajs/react";
import { H3 } from "../../../Components/Text";
import HorizontalTabBar from "../../../Components/TabBar/HorizontalTabBar";
import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";
import getErrorMessage from "../../../Helpers/error-message";
import Swal from "sweetalert2";
import { toastSettings } from "../../../Helpers/sweetalert-config";

const BlogAuthor = (props) => {
    const { posts, categories } = props;

    const tabBarMenus = [
        {
            label: "Blog List",
        },
        {
            label: "Blog Category",
        },
    ];
    const [activeMenu, setActiveMenu] = useState(tabBarMenus[0].label);

    const hanldeActionMenu = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <AdminLayout>
                <section className="my-6">
                    <div className="bg-white p-6 rounded-3xl shadow flex flex-col gap-8">
                        <H3>Manage Blog</H3>
                    </div>
                </section>
                <section className="my-6 bg-white p-6 shadow space-y-6 rounded-3xl">
                    <div className="mb-16">
                        <HorizontalTabBar
                            menus={tabBarMenus}
                            menuAction={hanldeActionMenu}
                        />
                    </div>
                    {activeMenu === "Blog List" ? (
                        <BlogList posts={posts} />
                    ) : (
                        activeMenu === "Blog Category" && (
                            <BlogCategory categories={categories} />
                        )
                    )}
                </section>
            </AdminLayout>
        </>
    );
};

export default BlogAuthor;
