import React, { useState } from "react";
import AdminLayout from "../../../Layouts/admin-layout";
import { Head, Link } from "@inertiajs/inertia-react";
import { H3, H6, H4 } from "../../../Components/Text";
import HorizontalTabBar from "../../../Components/TabBar/HorizontalTabBar";
import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";

const BlogAuthor = (props) => {
    const { menu } = props;
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
                        <HorizontalTabBar
                            menus={tabBarMenus}
                            menuAction={hanldeActionMenu}
                        />
                        {activeMenu === "Blog List" ? (
                            <BlogList />
                        ) : (
                            activeMenu === "Blog Category" && <BlogCategory />
                        )}
                    </div>
                </section>
            </AdminLayout>
        </>
    );
};

export default BlogAuthor;
