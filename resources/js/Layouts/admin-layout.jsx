import React from "react";
import SidebarMenu from "../Components/Sidebar/SidebarMenu";

const AdminLayout = (props) => {
    const { children } = props;

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
