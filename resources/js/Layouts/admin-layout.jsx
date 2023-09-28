import React, { useEffect, useState } from "react";
import SidebarMenu from "../Components/Sidebar/SidebarMenu";
import Swal from "sweetalert2";
import getErrorMessage from "../Helpers/error-message";
import { toastSettings } from "../Helpers/sweetalert-config";
import { router, usePage } from "@inertiajs/react";

const AdminLayout = ({ children }) => {
    const { flash, errors } = usePage().props;

    const [recentMethod, setRecentMethod] = useState("get");
    const method = ["post", "put", "patch", "delete"];

    const displayToast = (message, type) => {
        Swal.fire({
            ...toastSettings,
            icon: type,
            title: message,
        });
        setRecentMethod("get");
    };

    useEffect(() => {
        router.on("finish", (event) => {
            setRecentMethod(event.detail.visit.method);
        });
    }, []);

    useEffect(() => {
        if (flash.success) {
            method.includes(recentMethod) &&
                displayToast(flash.success, "success");
        } else if (Object.keys(errors).length > 0) {
            method.includes(recentMethod) &&
                displayToast(getErrorMessage(errors), "error");
        }
    }, [flash, errors, recentMethod]);

    return (
        <>
            <div className="flex bg-iapm-light-gray">
                <SidebarMenu />
                <main
                    className="max-w-screen-xl px-6 md:px-8 mx-auto pt-20 min-h-screen bg-no-repeat bg-right-top 
                font-poppins w-full overflow-x-hidden box-border"
                >
                    {children}
                </main>
            </div>
        </>
    );
};

export default AdminLayout;
