import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/admin-layout";
import { H3 } from "../../../Components/Text";
import HorizontalTabBar from "../../../Components/TabBar/HorizontalTabBar";
import Swal from "sweetalert2";
import { toastSettings } from "../../../Helpers/sweetalert-config";
import CompanyProfile from "./CompanyProfile";
import HistoryDevelopement from "./CompanyHistory";
const Company = (props) => {
    const { companyData, histories } = props;

    const tabBarMenus = [
        {
            label: "Profile",
        },
        {
            label: "History Development",
        },
    ];
    const [activeMenu, setActiveMenu] = useState(tabBarMenus[0].label);

    const hanldeActionMenu = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <Head>
                <title>Company</title>
            </Head>
            <AdminLayout>
                <section className="space-y-6 bg-white shadow rounded-3xl p-6 my-6 ">
                    <H3>Company</H3>
                    <HorizontalTabBar
                        menus={tabBarMenus}
                        menuAction={hanldeActionMenu}
                    />
                </section>
                <section className="mb-16">
                    {activeMenu === "Profile" ? (
                        <CompanyProfile datas={companyData} />
                    ) : (
                        activeMenu === "History Development" && (
                            <HistoryDevelopement datas={histories} />
                        )
                    )}
                </section>
            </AdminLayout>
        </>
    );
};

export default Company;
