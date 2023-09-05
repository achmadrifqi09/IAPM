import React from "react";
import SidebarMenu from "../../../Components/Sidebar/SidebarMenu";

const Dashboard = () => {
 
    return (
        <>
            <SidebarMenu />
            <main className="bg-grid bg-white min-h-screen bg-no-repeat bg-right-top font-poppins">
                {children}
            </main>
        </>
    );
};

export default Dashboard;
